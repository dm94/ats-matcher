import { Card, CardContent } from "@/components/ui/card";

export function SecondCard() {
  return (
    <div className="min-w-80 w-96 max-w-full flex flex-col gap-4">
      <p className="text-2xl font-bold">Check your resume</p>
      <Card>
        <CardContent className="p-4">
          Our system allows you to review your resume to adjust it to what the
          job offer requires and thus increase your chances of being hired.
        </CardContent>
      </Card>
    </div>
  );
}
