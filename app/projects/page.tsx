import { Metadata } from "next";
import { projects, frontendProjects } from "@/app/data/projects";
import { ProjectVideo } from "@/components/ui/project-video";
import Footer2 from "../components/v2/footer2";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-bg px-4 pt-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl font-[family-name:var(--font-poppins)] text-fg-1 text-[0.92rem] leading-[1.55rem] sm:text-[1rem] sm:leading-6">
        <h1 className="mb-5 text-[0.92rem] text-fg-1 sm:mb-6 sm:text-[1rem]">Selected Projects</h1>

        <div className="space-y-12 sm:space-y-14">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-3 sm:gap-4">
              <ProjectVideo src={project.video} className="aspect-video" />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <h2 className="text-[14px] font-medium  text-fg sm:text-[15px]">
                  {project.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-fg-3 sm:justify-end sm:text-[14px]">
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
                  {project.xLink && project.githubLink && (
                    <span className="text-fg-5">·</span>
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

              <p className="text-[13.5px] leading-6 text-fg-2 sm:text-[14px]">
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
          ))}
        </div>

        <div className="mt-14 border-t border-dashed border-border-2 pt-8 sm:mt-16 sm:pt-10">
          <h2 className="mb-5 text-[0.92rem] text-fg-1 sm:mb-6 sm:text-[1rem]">Frontend Work</h2>

          <div className="flex flex-col gap-8 sm:gap-10">
            {frontendProjects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <ProjectVideo src={project.video} className="aspect-video" />
                {project.xLink && (
                  <a
                    href={project.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] text-fg-3 transition-colors hover:text-fg sm:text-[14px]"
                  >
                    x post
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />

    </main>
  );
}
