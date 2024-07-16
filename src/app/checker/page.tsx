import Builder from "@/components/pages/form-builder/builder";
import ReduxProvider from "@/store/redux-provider";

export default function Checker() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <ReduxProvider>
        <Builder />
      </ReduxProvider>
    </main>
  );
}
