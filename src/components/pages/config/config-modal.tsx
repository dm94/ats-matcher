"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { ConfigForm } from "./config-form";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function ConfigModal({ open, setOpen }: Readonly<Props>) {
  const saveForm = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Configuration</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4 sm:max-w-[425px]">
        <DialogTitle>Configuration</DialogTitle>
        <DialogDescription>
          Fill in the API data to be used, the system is compatible with OpenAI
          compatible APIs.
        </DialogDescription>
        <ConfigForm id="config-moddal-form" saveForm={saveForm} />
        <DialogFooter>
          <Button form="config-moddal-form" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
