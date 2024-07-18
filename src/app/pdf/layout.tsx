import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Viewer | ATS Matcher",
  description: "View your resume with Hardvard's recommended resume format",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
