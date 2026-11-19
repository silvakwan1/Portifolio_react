import Image from "next/image";
import { ExternalLink, Github, Smartphone, Sparkles } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/projects";

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border bg-[#121216] transition-colors ${
        project.featured
          ? "border-banana-yellow/45 hover:border-[var(--color-yellow)]"
          : "border-[var(--color-graphite)] hover:border-banana-yellow/50"
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--color-graphite)] bg-[var(--color-black)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          loading="eager"
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#121216]/80 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-[var(--color-graphite)] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-yellow)] px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-black)]">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Destaque
              </span>
            )}

            {project.isConceptualDemo && (
              <span className="rounded-md border border-banana-yellow/60 bg-banana-yellow/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--color-yellow)]">
                Demonstração conceitual
              </span>
            )}
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold text-[var(--color-white)]">
            {project.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-gray)]">
            {project.description}
          </p>

          <dl className="mt-5 space-y-3 rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] p-4 text-xs sm:text-sm">
            <div>
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
                Problema que resolve
              </dt>
              <dd className="mt-1 leading-relaxed text-[var(--color-gray)]">{project.problem}</dd>
            </div>
            <div className="border-t border-[var(--color-graphite)] pt-3">
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--color-yellow)]">
                Solução desenvolvida
              </dt>
              <dd className="mt-1 leading-relaxed text-banana-white/90">
                {project.solution}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--color-graphite)] bg-[#1A1A20] px-2.5 py-1 font-mono text-xs text-[var(--color-white)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--color-graphite)] pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-yellow)] px-4 py-2 text-xs font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)] sm:text-sm"
            >
              Acessar projeto
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {project.secondaryLink && (
            <a
              href={project.secondaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-graphite)] bg-[#1A1A20] px-4 py-2 text-xs font-semibold text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)] sm:text-sm"
            >
              <Smartphone className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
              {project.secondaryLink.label}
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-graphite)] bg-[#1A1A20] px-4 py-2 text-xs font-semibold text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)] sm:text-sm"
            >
              <Github className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
              Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projetos"
      className="border-b border-[var(--color-graphite)] bg-[#101014] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
              PROJETOS DESENVOLVIDOS
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
              SISTEMAS, PLATAFORMAS E APLICAÇÕES EM PORTFÓLIO.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--color-gray)]">
            Soluções publicadas e projetos de portfólio com foco em problema resolvido, arquitetura
            aplicada e código acessível.
          </p>
        </div>

        {/* Featured 2-column showcase (Futmundi + Mensalize) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Existing Repository Projects */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
