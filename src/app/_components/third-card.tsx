import { Card, CardContent } from "@/components/ui/card";

export function ThirdCard() {
  return (
    <div className="min-w-80 w-96 max-w-full flex flex-col gap-4">
      <p className="text-2xl font-bold">Easily generate a new CV</p>
      <Card>
        <CardContent className="p-4">
          When you have all the data filled in as you wish, you can generate a
          new curriculum vitae at the click of a button. And the best thing is
          that the CV is based on a template recommended by Harvard.
        </CardContent>
      </Card>
    </div>
  );
}
