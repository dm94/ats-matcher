"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./resume";

export const Viewer = () => {
  return (
    <PDFViewer>
      <Resume />
    </PDFViewer>
  );
};
