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
      <head>
        <script
          defer
          data-domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN}
          src={process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT}
        ></script>
      </head>

      <body className="bg-white dark:bg-slate-800 min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
