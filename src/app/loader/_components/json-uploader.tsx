"use client";

import Uploader from "@/components/ui/uploader";
import { useAppDispatch } from "@/store";
import { setCvState } from "@/store/cvSlice";
import { useRouter } from "next/navigation";

export function JsonUploader() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onUpload = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      try {
        const content = (event?.target?.result as string) ?? "";
        const parsed = JSON.parse(content);

        dispatch(setCvState(parsed));
      } catch (error) {
        console.error(error);
      }

      router.push("/checker");
    });
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col w-full justify-center gap-4">
      <p>I have a JSON with the CV</p>
      <Uploader onUpload={onUpload} acceptFiles="*.json" />
    </div>
  );
}
