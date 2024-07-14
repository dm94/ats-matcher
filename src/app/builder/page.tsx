"use client";

import { FormEvent } from "react";
import { AddEducation } from "./_components/add-education";
import { AddExperiencie } from "./_components/add-experiencie";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Builder() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4" id="header-part">
          <h2 className="text-md font-bold text-gray-900 dark:text-white">
            Header
          </h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="full_name">Full name *</Label>
            <Input
              type="text"
              id="full_name"
              placeholder="Name Surname"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="position">Position / Role *</Label>
            <Input type="text" id="position" placeholder="Developer" required />
          </div>
        </div>
        <div className="flex flex-col gap-4" id="contact-part">
          <h2 className="text-md font-bold text-gray-900 dark:text-white">
            Contact
          </h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              placeholder="email@email.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" placeholder="Street..." />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" placeholder="Talavera..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input type="tel" id="phone_number" placeholder="666..." />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2" id="about-part">
          <Label htmlFor="about">About</Label>
          <div className="flex flex-col gap-2">
            <Textarea id="about" placeholder="I'am...." />
          </div>
        </div>
        <div className="flex flex-col gap-4" id="education-part">
          <h2 className="text-md font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <AddEducation />
        </div>
        <div className="flex flex-col gap-4" id="experiencie-part">
          <h2 className="text-md font-bold text-gray-900 dark:text-white">
            Experiencie
          </h2>
          <AddExperiencie />
        </div>
      </form>
    </main>
  );
}
