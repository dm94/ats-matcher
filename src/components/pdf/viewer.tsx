"use client";

import { Resume } from "./resume";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const Viewer = () => {
  return (
    <PDFViewer>
      <Resume />
    </PDFViewer>
  );
};
