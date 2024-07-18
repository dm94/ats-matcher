import { FirstCard } from "./_components/first-card";
import { SecondCard } from "./_components/second-card";
import Link from "next/link";
import { ThirdCard } from "./_components/third-card";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center p-4 gap-16 items-center">
      <div className="flex flex-row items-start justify-center flex-wrap gap-16 min-h-full">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
      <Link
        className="flex justify-center items-center max-w-80 w-80 bg-emerald-900 text-emerald-50 hover:bg-emerald-950 h-11 rounded-md px-8"
        href="/checker"
      >
        {"Let's start"}
      </Link>
    </main>
  );
}
