import type { Metadata } from "next";
import ResumeViewer from "../components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-5xl px-4 sm:px-10 lg:px-24 md:pt-16 pt-20 pb-8 sm:pb-12">
        <h1 className="text-xl sm:text-2xl tracking-tight mb-6 sm:mb-8 font-[family-name:var(--font-geist-mono)]">
          Resume
        </h1>
        <ResumeViewer />
      </div>
    </main>
  );
}
