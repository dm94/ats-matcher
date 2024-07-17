import type { Metadata } from "next";
import "../styles/main.css";
import { Header } from "@/components/pages/header";

export const metadata: Metadata = {
  title: "ATS Matcher",
  description: "Have a tailor-made resume for the job offer of your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-slate-800 min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
