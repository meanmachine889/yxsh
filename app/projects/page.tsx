import { Metadata } from "next";
import Footer2 from "../components/v2/footer2";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-bg px-4">
      <Footer2 />
    </main>
  );
}
