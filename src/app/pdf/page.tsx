import { Viewer } from "@/components/pdf/viewer";

export default function PDF() {
  return (
    <main className="flex flex-col w-full p-4 min-h-96 gap-8">
      <h1 className="text-2xl font-bold text-center">
        {"View your resume with Hardvard's recommended resume format"}
      </h1>
      <Viewer />
    </main>
  );
}
