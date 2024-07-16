import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FormEvent } from "react";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setOpen: (open: boolean) => void;
};

export function NewItemModal({
  children,
  open,
  onSubmit,
  setOpen,
}: Readonly<Props>) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add a new item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <DialogTitle>Add a new item</DialogTitle>
          <DialogDescription>Values with * are mandatory</DialogDescription>
          {children}
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
