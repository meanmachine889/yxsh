import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { ProjectVideo } from "@/components/ui/project-video";
import Footer2 from "@/app/components/v2/footer2";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return { title: project.name };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-bg px-4 pt-16 sm:px-6 font-[family-name:var(--font-poppins)]">
      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <Link
          href="/"
          className="self-start text-[0.8rem] text-fg-3 hover:text-fg transition-colors"
        >
          back
        </Link>

        <ProjectVideo src={project.video} className="aspect-video w-full" />

        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-[0.95rem] text-fg">{project.name}</h1>
            <div className="flex items-center gap-4 text-[0.78rem] text-fg-3">
              {project.xLink && (
                <a
                  href={project.xLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors"
                >
                  x post
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors"
                >
                  github
                </a>
              )}
            </div>
          </div>

          <p className="text-[0.85rem] leading-[1.7rem] text-fg-2">
            {project.description.map((part, i) =>
              part.highlight ? (
                <span key={i} className="text-fg font-medium">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </p>
        </div>
      </div>
      <Footer2 />
    </main>
  );
}
