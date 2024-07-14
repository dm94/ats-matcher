import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`bg-white dark:bg-slate-800 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
