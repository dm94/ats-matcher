"use client";

import ReduxProvider from "@/store/redux-provider";

export default function CheckerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
