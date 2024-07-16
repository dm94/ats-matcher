import { NewItemModal } from "./new-item-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Education } from "@/types/CurriculumVitae";
import { FormEvent, useState } from "react";

type Props = {
  onAdd: (newEducation: Education) => void;
};

export function AddEducation({ onAdd }: Readonly<Props>) {
  const [open, setOpen] = useState<boolean>(false);
  const [institution, setInstitution] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const resetState = () => {
    setInstitution("");
    setTitle("");
    setLocation("");
    setEndDate("");
    setDescription("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      institution,
      title,
      endDate,
      description,
      location,
    });

    resetState();
    setOpen(false);
  };

  return (
    <NewItemModal open={open} onSubmit={onSubmit} setOpen={setOpen}>
      <div className="flex flex-col gap-3" id="education-1">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="institution">Institution*</Label>
            <Input
              type="text"
              id="institution"
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title*</Label>
            <Input
              type="text"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="edutaction_end_date">End Date</Label>
            <Input
              type="date"
              id="edutaction_end_date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="education_description"
            className="text-sm font-medium"
          >
            Description
          </Label>
          <Textarea
            id="education_description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </NewItemModal>
  );
}
