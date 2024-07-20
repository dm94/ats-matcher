import Link from "next/link";
import { UploaderWrapper } from "./_components/uploader-wrapper";

export default function PDF() {
  return (
    <main className="flex flex-col w-full p-4 min-h-96 gap-8 max-w-96 mx-auto">
      <h1 className="text-2xl font-bold text-center">{"Load your CV"}</h1>
      <Link
        className="flex justify-center items-center bg-emerald-900 text-emerald-50 hover:bg-emerald-950 h-11 rounded-md px-8"
        href="/checker"
      >
        {"I don't have a JSON of the CV"}
      </Link>
      <UploaderWrapper />
    </main>
  );
}
