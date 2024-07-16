import { NewItemModal } from "./new-item-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { Position } from "@/types/CurriculumVitae";

type Props = {
  onAdd: (value: Position) => void;
};

export function AddExperiencie({ onAdd }: Readonly<Props>) {
  const [open, setOpen] = useState<boolean>(false);
  const [organization, setOrganization] = useState<string>("");
  const [positionTitle, setPositionTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const resetState = () => {
    setOrganization("");
    setPositionTitle("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      organization,
      positionTitle,
      location,
      startDate,
      endDate,
      description,
    });

    resetState();
    setOpen(false);
  };

  return (
    <NewItemModal open={open} onSubmit={onSubmit} setOpen={setOpen}>
      <div className="flex flex-col gap-3" id="experiencie-1">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="organization">Organization*</Label>
            <Input
              type="text"
              id="organization"
              required
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="position">Job Position*</Label>
            <Input
              type="text"
              id="position"
              required
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </div>
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="experiencie_start_date">Start Date*</Label>
            <Input
              type="date"
              id="experiencie_start_date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="experiencie_end_date">End Date</Label>
            <Input
              type="date"
              id="experiencie_end_date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="education_description">Description</Label>
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
