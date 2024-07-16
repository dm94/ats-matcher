import { NewItemModal } from "./new-item-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AdditionalInfo } from "@/types/CurriculumVitae";
import { FormEvent, useState } from "react";

type Props = {
  onAdd: (value: AdditionalInfo) => void;
};

export function AddAdditionalInfo({ onAdd }: Readonly<Props>) {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const resetState = () => {
    setTitle("");
    setDescription("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      title,

      description,
    });

    resetState();
    setOpen(false);
  };

  return (
    <NewItemModal open={open} onSubmit={onSubmit} setOpen={setOpen}>
      <div className="flex flex-col gap-3" id="additional-info-modal">
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
          <Label htmlFor="description" className="text-sm font-medium">
            Description*
          </Label>
          <Textarea
            id="description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </NewItemModal>
  );
}
