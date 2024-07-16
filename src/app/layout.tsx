import type { Metadata } from "next";
import "../styles/main.css";

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
      <body className={`bg-white dark:bg-slate-800`}>{children}</body>
    </html>
  );
}
