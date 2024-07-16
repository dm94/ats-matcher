import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checker | ATS Matcher",
  description: "Check the ATS of your curriculum",
};

export default function CheckerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
