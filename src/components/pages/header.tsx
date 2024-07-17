"use client";

import { useState } from "react";
import { ConfigModal } from "./config/config-modal";
import ReduxProvider from "@/store/redux-provider";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="flex px-4 justify-end w-100">
      <ReduxProvider>
        <ConfigModal open={open} setOpen={setOpen} />
      </ReduxProvider>
    </header>
  );
}
