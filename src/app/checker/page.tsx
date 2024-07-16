"use client";

import { Button } from "@/components/ui/button";
import Builder from "@/components/pages/form-builder/builder";
import ReduxProvider from "@/store/redux-provider";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CurriculumVidaeType } from "@/types/CurriculumVitae";

export default function Checker() {
  const [offer, setOffer] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [resume, setResume] = useState<CurriculumVidaeType>();

  const analyseCurriculum = async () => {
    const response = await fetch("/api/cvcheck", {
      method: "POST",
      body: JSON.stringify({
        config: {
          baseURL: "http://localhost:1234/v1",
          compatibility: "compatible",
          apiKey: "",
          model: "RichardErkhov/h2oai_-_h2ogpt-4096-llama2-7b-chat-gguf",
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
    <main className="flex min-h-screen flex-row flex-row p-3 w-full gap-8 flex-wrap">
      <ReduxProvider>
        <Builder onSave={updateResume} />
      </ReduxProvider>
      <section className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-2 w-full" id="job-offer-part">
          <Label htmlFor="job">Job Offer</Label>
          <p className="text-sm">
            Write here the job offer with which you want to do the verification
          </p>
          <Textarea
            id="job"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full max-w-md">
        <Button type="button" onClick={() => analyseCurriculum()}>
          Check the ATS
        </Button>
        {message && <div>{message}</div>}
      </section>
    </main>
  );
}
