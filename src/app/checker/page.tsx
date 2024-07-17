"use client";

import { Button } from "@/components/ui/button";
import Builder from "@/components/pages/form-builder/builder";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CurriculumVidaeType } from "@/types/CurriculumVitae";
import { store } from "@/store";

export default function Checker() {
  const [offer, setOffer] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [resume, setResume] = useState<CurriculumVidaeType>();

  const analyseCurriculum = async () => {
    const state = store.getState();

    const response = await fetch("/api/cvcheck", {
      method: "POST",
      body: JSON.stringify({
        config: {
          baseURL: state["ai-config"].config?.baseURL ?? "",
          compatibility:
            state["ai-config"].config?.compatibility ?? "compatible",
          apiKey: state["ai-config"].config?.apiKey ?? "",
          model: state["ai-config"].config?.model ?? "",
        },
        offer,
        resume,
      }),
    });

    const json = await response.json();

    setMessage(json.text);
  };

  const updateResume = (value: CurriculumVidaeType) => setResume(value);

  return (
    <main className="flex flex-row p-3 w-full gap-8 justify-around flex-wrap lg:flex-nowrap">
      <Builder onSave={updateResume} />
      <section className="flex flex-col gap-4 w-full max-w-xl content-start">
        <div className="flex flex-col gap-2 w-full" id="job-offer-part">
          <Label htmlFor="job">Job Offer</Label>
          <p className="text-sm">
            Write here the job offer with which you want to do the verification
          </p>
          <Textarea
            id="job"
            value={offer}
            className="min-h-44"
            onChange={(e) => setOffer(e.target.value)}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full max-w-xl content-start">
        <Button type="button" onClick={() => analyseCurriculum()}>
          Check the CV
        </Button>
        <p className="min-h-36 max-h-80 border p-2 border-slate-500 rounded-lg overflow-auto whitespace-break-spaces">
          {message}
        </p>
      </section>
    </main>
  );
}
