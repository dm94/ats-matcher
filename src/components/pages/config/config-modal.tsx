"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FormEvent, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { store, useAppDispatch } from "@/store";
import { PasswordInput } from "@/components/ui/password-input";
import { setConfigState } from "@/store/configSlice";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function ConfigModal({ open, setOpen }: Readonly<Props>) {
  const [baseURL, setBaseURL] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const state = store.getState();

    setBaseURL(
      state["ai-config"].config?.baseURL ?? "https://api.openai.com/v1"
    );
    setApiKey(state["ai-config"].config?.apiKey ?? "");
    setModel(state["ai-config"].config?.model ?? "gpt-4o");
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const compatibility =
      baseURL === "https://api.openai.com/v1" ? "strict" : "compatible";

    dispatch(
      setConfigState({
        baseURL,
        apiKey,
        model,
        compatibility,
      })
    );

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Config</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <DialogTitle>Configuration</DialogTitle>
          <DialogDescription>
            Fill in the API data to be used, the system is compatible with
            OpenAI compatible APIs.
          </DialogDescription>
          <div className="flex flex-col gap-2">
            <Label htmlFor="url">Base URL*</Label>
            <Input
              type="text"
              id="url"
              required
              value={baseURL}
              autoComplete="off"
              onChange={(e) => setBaseURL(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="api-key" className="text-sm font-medium">
              API Key (Leave blank if not necessary)
            </Label>
            <PasswordInput
              id="api-key"
              value={apiKey}
              autoComplete="off"
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="model" className="text-sm font-medium">
              Model*
            </Label>
            <Input
              type="text"
              id="model"
              required
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
