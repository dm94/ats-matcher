import { FirstCard } from "./_components/first-card";
import { SecondCard } from "./_components/second-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThirdCard } from "./_components/third-card";

export default function Home() {
  return (
    <main className="container flex flex-col w-full justify-center p-6 md:p-8 gap-12 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start justify-center gap-8 w-full">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
      <Button asChild className="w-72">
        <Link href="/loader">{"Let's start"}</Link>
      </Button>
    </main>
  );
}
