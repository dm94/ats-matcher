import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  onRemove: () => void;
};

export function ListItem({ title, subtitle, onRemove }: Readonly<Props>) {
  return (
    <div className="border border-slate-950 bg-neutral-200 dark:bg-slate-700 p-2 flex flex-row justify-between items-center">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs">{subtitle}</p>
      </div>
      <Button
        type="button"
        variant="destructive"
        className="min-w-10	"
        size="icon"
        onClick={() => onRemove()}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
