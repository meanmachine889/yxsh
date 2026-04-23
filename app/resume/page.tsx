import type { Metadata } from "next";
import ResumeViewer from "../components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main className="flex flex-col pt-24 items-center min-h-screen bg-bg text-fg font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-3xl px-4 sm:px-10 lg:px-24 md:pt-16 pt-20 pb-8 sm:pb-12">
        <ResumeViewer />
      </div>
    </main>
  );
}
