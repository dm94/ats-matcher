"use client";

import { Button } from "@/components/ui/button";
import Builder from "@/components/pages/form-builder/builder";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CurriculumVidaeType } from "@/types/CurriculumVitae";
import { store } from "@/store";
import Link from "next/link";
import { jsonExport } from "@/lib/json-export";

export default function Checker() {
  const [offer, setOffer] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [resume, setResume] = useState<CurriculumVidaeType>();
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  const analyseCurriculum = async () => {
    if (requestInProgress) {
      return;
    }

    setRequestInProgress(true);
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

    setMessage(json?.text ?? json?.error?.message);
    setRequestInProgress(false);
  };

  const updateResume = (value: CurriculumVidaeType) => setResume(value);

  const exportResume = () => {
    const jsonStr = JSON.stringify(resume);

    jsonExport(jsonStr, "curriculum-vitae.json");
  };

  return (
    <main className="flex flex-row p-3 w-full gap-8 justify-around flex-wrap lg:flex-nowrap">
      <Builder onSave={updateResume} />
      <section className="flex flex-col gap-4 w-full max-w-xl content-start">
        <div className="flex flex-col gap-2 w-full" id="job-offer-part">
          <Label className="font-semibold text-xl" htmlFor="job">
            Job Offer
          </Label>
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
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">AI review</h2>
          <p className="text-sm">
            The AI will read your CV and the job offer to give you several
            recommendations
          </p>
        </div>
        <Button
          type="button"
          onClick={() => analyseCurriculum()}
          disabled={requestInProgress}
        >
          Check the CV
        </Button>
        <p className="min-h-36 max-h-80 border p-2 border-slate-500 rounded-lg overflow-auto whitespace-break-spaces bg-slate-900">
          {message}
        </p>
        <Link
          className="flex justify-center items-center  bg-emerald-900 text-emerald-50 hover:bg-emerald-950 h-11 rounded-md px-8"
          href="/pdf"
        >
          {"Generate the PDF"}
        </Link>
        <Button type="button" onClick={() => exportResume()}>
          Export CV to JSON
        </Button>
      </section>
    </main>
  );
}
