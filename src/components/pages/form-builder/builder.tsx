"use client";

import { FormEvent, useEffect, useState } from "react";
import { AddEducation } from "./_components/add-education";
import { AddExperiencie } from "./_components/add-experiencie";
import { AddAdditionalInfo } from "./_components/add-additional";
import { AddSocial } from "./_components/add-social";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import {
  Education,
  SocialLink,
  Position,
  AdditionalInfo,
  CurriculumVidaeType,
} from "@/types/CurriculumVitae";
import { Button } from "@/components/ui/button";
import { setCvState } from "@/store/cvSlice";
import { useAppDispatch, store } from "@/store";
import { ListItem } from "./_components/list-item";
import { shallowEqual } from "@/lib/utils";

type Props = {
  onSave: (value: CurriculumVidaeType) => void;
};

export default function Builder({ onSave }: Readonly<Props>) {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [experiencie, setExperiencie] = useState<Position[]>([]);
  const [projects, setProjects] = useState<Position[]>([]);
  const [aditionalInfo, setAditionalInfo] = useState<AdditionalInfo[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [about, setAbout] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const state = store.getState();

    setSocialLinks(state.cv?.curriculumState?.socialLinks ?? []);
    setEducation(state.cv?.curriculumState?.education ?? []);
    setExperiencie(state.cv?.curriculumState?.experiencie ?? []);
    setProjects(state.cv?.curriculumState?.projects ?? []);
    setFullName(state.cv?.curriculumState?.fullName ?? "");
    setPosition(state.cv?.curriculumState?.position ?? "");
    setAddress(state.cv?.curriculumState?.contact?.address ?? "");
    setCity(state.cv?.curriculumState?.contact?.city ?? "");
    setEmail(state.cv?.curriculumState?.contact?.email ?? "");
    setPhoneNumber(state.cv?.curriculumState?.contact?.phoneNumber ?? "");
    setAbout(state.cv?.curriculumState?.about ?? "");
    setAditionalInfo(state.cv?.curriculumState?.aditionalInfo ?? []);

    state?.cv?.curriculumState && onSave(state.cv.curriculumState);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resume = {
      fullName,
      position,
      contact: {
        address,
        city,
        email,
        phoneNumber,
      },
      socialLinks,
      about,
      education,
      experiencie,
      projects,
      aditionalInfo,
    };

    dispatch(setCvState(resume));

    onSave(resume);
  };

  const addEducation = (newEducation: Education) =>
    setEducation([...education, newEducation]);

  const removeEducation = (educationToRemove: Education) =>
    setEducation(
      [...education].filter((e) => !shallowEqual(e, educationToRemove))
    );

  const addSocialLinks = (newValue: SocialLink) =>
    setSocialLinks([...socialLinks, newValue]);

  const removeSocialLinks = (newValue: SocialLink) =>
    setSocialLinks([...socialLinks].filter((e) => !shallowEqual(e, newValue)));

  const addExperiencie = (newValue: Position) =>
    setExperiencie([...experiencie, newValue]);

  const removeExperiencie = (newValue: Position) =>
    setExperiencie([...experiencie].filter((e) => !shallowEqual(e, newValue)));

  const addProject = (newValue: Position) =>
    setProjects([...projects, newValue]);

  const removeProject = (newValue: Position) =>
    setProjects([...projects].filter((e) => !shallowEqual(e, newValue)));

  const addAdditionalInfo = (newValue: AdditionalInfo) =>
    setAditionalInfo([...aditionalInfo, newValue]);

  const removeAdditionalInfo = (newValue: AdditionalInfo) =>
    setAditionalInfo(
      [...aditionalInfo].filter((e) => !shallowEqual(e, newValue))
    );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full max-w-md">
      <h2 className="font-semibold text-xl">Curriculum details</h2>
      <div className="flex flex-col gap-4" id="header-part">
        <div className="flex flex-col gap-2">
          <Label htmlFor="full_name">Full name *</Label>
          <Input
            type="text"
            id="full_name"
            placeholder="Name Surname"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="position">Position / Role *</Label>
          <Input
            type="text"
            id="position"
            placeholder="Developer"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            placeholder="email@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="contact" className="border-blue-100">
          <AccordionTrigger>Contact</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4" id="contact-part">
              <div className="flex flex-col gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="Street..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Talavera..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone_number">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone_number"
                    placeholder="666..."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="social" className="border-blue-100">
          <AccordionTrigger>Social</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4" id="social-part">
              {socialLinks.map((e, index) => (
                <ListItem
                  title={e.textToShow}
                  subtitle={e.website}
                  key={`${e.textToShow}-${index}`}
                  onRemove={() => removeSocialLinks(e)}
                />
              ))}
              <AddSocial onAdd={addSocialLinks} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="about" className="border-blue-100">
          <AccordionTrigger>About</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2" id="about-part">
              <Textarea
                id="about"
                placeholder="I'am...."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="education" className="border-blue-100">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4" id="education-part">
              {education.map((e, index) => (
                <ListItem
                  title={e.institution}
                  subtitle={e.title}
                  key={`${e.title}-${e.endDate}-${index}`}
                  onRemove={() => removeEducation(e)}
                />
              ))}
              <AddEducation onAdd={addEducation} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="experiencie" className="border-blue-100">
          <AccordionTrigger>Experiencie</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4" id="experiencie-part">
              {experiencie.map((e, index) => (
                <ListItem
                  title={e.organization}
                  subtitle={e.positionTitle}
                  key={`${e.organization}-${e.positionTitle}-${index}`}
                  onRemove={() => removeExperiencie(e)}
                />
              ))}
              <AddExperiencie onAdd={addExperiencie} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="projects" className="border-blue-100">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4" id="projects-part">
              {projects.map((e, index) => (
                <ListItem
                  title={e.organization}
                  subtitle={e.positionTitle}
                  key={`${e.organization}-${e.positionTitle}-${index}`}
                  onRemove={() => removeProject(e)}
                />
              ))}
              <AddExperiencie onAdd={addProject} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="additional" className="border-blue-100">
          <AccordionTrigger>Additional Information</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4" id="additional-part">
              {aditionalInfo.map((e, index) => (
                <ListItem
                  title={e.title}
                  subtitle={e.description}
                  key={`${e.title}-${index}`}
                  onRemove={() => removeAdditionalInfo(e)}
                />
              ))}
              <AddAdditionalInfo onAdd={addAdditionalInfo} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
