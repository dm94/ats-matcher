import { NewItemModal } from "./new-item-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { SocialLink } from "@/types/CurriculumVitae";

type Props = {
  onAdd: (value: SocialLink) => void;
};

export function AddSocial({ onAdd }: Readonly<Props>) {
  const [open, setOpen] = useState<boolean>(false);
  const [textToShow, setTextToShow] = useState<string>("");
  const [website, setWebsite] = useState<string>("");

  const resetState = () => {
    setTextToShow("");
    setWebsite("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      textToShow,
      website,
    });

    resetState();
    setOpen(false);
  };

  return (
    <NewItemModal open={open} onSubmit={onSubmit} setOpen={setOpen}>
      <div className="flex flex-col gap-3" id="add-social">
        <div className="flex flex-col gap-2">
          <Label htmlFor="to-show">Text to be displayed*</Label>
          <Input
            type="text"
            id="to-show"
            required
            value={textToShow}
            onChange={(e) => setTextToShow(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="website">Website*</Label>
          <Input
            type="url"
            id="website"
            required
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>
    </NewItemModal>
  );
}
