import { NewItemModal } from "./new-item-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AddEducation() {
  return (
    <NewItemModal>
      <div className="flex flex-col gap-3" id="education-1">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="institution">Institution*</Label>
            <Input type="text" id="institution" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title*</Label>
            <Input type="text" id="title" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="edutaction_end_date">End Date</Label>
            <Input type="date" id="edutaction_end_date" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="education_description"
            className="text-sm font-medium"
          >
            Description
          </Label>
          <Textarea id="education_description" />
        </div>
      </div>
    </NewItemModal>
  );
}
