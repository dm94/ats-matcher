import { NewItemModal } from "./new-item-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AddExperiencie() {
  return (
    <NewItemModal>
      <div className="flex flex-col gap-3" id="experiencie-1">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="organization">Organization*</Label>
            <Input type="text" id="organization" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="position">Job Position*</Label>
            <Input type="text" id="position" required />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">Location</Label>
          <Input type="text" id="location" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="experiencie_start_date">Start Date*</Label>
            <Input type="date" id="experiencie_start_date" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="experiencie_end_date">End Date</Label>
            <Input type="date" id="experiencie_end_date" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="education_description">Description</Label>
          <Textarea id="education_description" />
        </div>
      </div>
    </NewItemModal>
  );
}
