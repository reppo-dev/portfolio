import { projects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiGlobalLine } from "react-icons/ri";

const Project = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container border-t border-border">
        <div className="flex items-center gap-4 py-4">
          <div className="shrink-0 hidden sm:block">
            <Image
              src={"/images/feature-selection.png"}
              alt=""
              width={120}
              height={120}
              className="w-full h-auto object-cover mt-4 dark:invert"
            />
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold uppercase mt-4">
            Selected{" "}
            <span className="outline-text">
              Projects
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7 mt-12">
          {projects.map((project) => (
            <div
              className="w-full min-w-0 px-2 py-2 border border-border bg-card text-card-foreground rounded-lg overflow-hidden shadow-xl max-w-160 mx-auto"
              key={project.id}
            >
              <div className="relative bg-neutral-900/90 rounded-lg overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={793}
                  height={420}
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/10" />
              </div>
              <div className="p-2">
                  <h3 className="text-2xl font-bold break-words">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="mt-2 text-muted-foreground">{project.desc}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between py-4 gap-5">
                <div className="flex flex-wrap gap-4">
                  {project.haveLive == true && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex items-center gap-2 font-semibold"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <RiGlobalLine />
                        Live Demo
                      </span>
                    </Link>
                  )}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center gap-2 font-semibold"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <RiGithubFill />
                      Source code
                    </span>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tools.map((tool) => (
                    <p
                      key={tool}
                      className="border border-border px-3 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
