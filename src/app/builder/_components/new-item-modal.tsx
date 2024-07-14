import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormEvent } from "react";

export function NewItemModal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("onSubmit", event);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a new item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <DialogTitle>Add a new item</DialogTitle>
          {children}
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
