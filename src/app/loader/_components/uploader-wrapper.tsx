"use client";

import ReduxProvider from "@/store/redux-provider";
import { JsonUploader } from "./json-uploader";

export function UploaderWrapper() {
  return (
    <ReduxProvider>
      <JsonUploader />
    </ReduxProvider>
  );
}
