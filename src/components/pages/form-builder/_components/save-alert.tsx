import { Alert, AlertTitle } from "@/components/ui/alert";

export function SaveAlert() {
  return (
    <Alert className="fixed bottom-0 left-0 max-w-64">
      <AlertTitle>Saving changes...</AlertTitle>
    </Alert>
  );
}
