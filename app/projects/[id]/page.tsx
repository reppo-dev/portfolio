import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import { projects } from "@/data/data";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // ← Promise
}) {
  const { id } = await params; // ← await کن
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen w-full bg-background text-foreground">
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
        <div className="absolute bottom-6 left-6 md:left-12">
          <h1 className="text-2xl md:text-5xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs border border-border bg-secondary text-secondary-foreground rounded-full backdrop-blur"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Overview & Meta */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold border-b border-border pb-2">
              About the Project
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Role
              </h3>
              <p>{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Duration
              </h3>
              <p>{project.duration}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-secondary text-secondary-foreground hover:bg-accent px-4 py-2 rounded-lg"
                >
                  <RiGithubFill className="w-4 h-4" />
                  Source Code
                </Link>
              )}
              {project.haveLive && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-6">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-foreground mt-1">▹</span>
                <span className="text-muted-foreground">{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-6">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden border border-border"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-6">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.techStack.map((stack) => (
              <div key={stack.category} className="border border-border bg-card p-5 rounded-xl">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Structure */}
        {project.structure.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-6">
              Project Structure
            </h2>
            <div className="border border-border bg-card p-5 rounded-xl font-mono text-sm text-muted-foreground space-y-1 overflow-x-auto">
              {project.structure.map((s) => (
                <div key={s.path} className="flex gap-4">
                  <span className="text-foreground whitespace-nowrap">
                    {s.path}
                  </span>
                  <span className="text-muted-foreground hidden md:inline">
                    → {s.description}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Getting Started */}
        {(project.setup.backend || project.setup.frontend || project.setup.env?.length) && (
          <section>
            <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-6">
              Getting Started
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.setup.backend && (
                <div className="border border-border bg-card p-5 rounded-xl">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <span className="text-blue-400">⚙️</span> Backend
                  </h3>
                  <pre className="bg-muted p-4 rounded-lg text-sm text-muted-foreground overflow-x-auto">
                    {project.setup.backend}
                  </pre>
                </div>
              )}
              {project.setup.frontend && (
                <div className="border border-border bg-card p-5 rounded-xl">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <span className="text-blue-400">🖥️</span> Frontend
                  </h3>
                  <pre className="bg-muted p-4 rounded-lg text-sm text-muted-foreground overflow-x-auto">
                    {project.setup.frontend}
                  </pre>
                </div>
              )}
            </div>
            {project.setup.env && (
              <div className="mt-6 border border-border bg-card p-5 rounded-xl">
                <h3 className="font-medium mb-3">Environment Variables</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm text-muted-foreground overflow-x-auto">
                  {project.setup.env.join("\n")}
                </pre>
              </div>
            )}
          </section>
        )}
      </div>
    </article>
  );
}
