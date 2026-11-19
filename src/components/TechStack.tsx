import { Monitor, Smartphone, Server, Database } from "lucide-react";
import { TECH_STACK } from "@/data/stack";

const CATEGORY_ICONS: Record<string, typeof Monitor> = {
  frontend: Monitor,
  mobile: Smartphone,
  backend: Server,
  "data-infra": Database,
};

export function TechStack() {
  return (
    <section
      id="tecnologias"
      className="border-b border-[var(--color-graphite)] bg-[var(--color-black)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
            STACK TECNOLÓGICA
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
            FERRAMENTAS MODERNAS PARA SISTEMAS CONFIÁVEIS.
          </h2>
          <p className="mt-4 text-base text-[var(--color-gray)]">
            Tecnologias consolidadas em produção para construir interfaces rápidas, aplicativos
            móveis, back-ends seguros e bancos de dados estruturados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TECH_STACK.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Monitor;
            return (
              <article
                key={category.id}
                className="rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-6 transition-colors hover:border-banana-yellow/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-banana-yellow/15 text-[var(--color-yellow)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[var(--color-white)]">
                        {category.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-[var(--color-gray)] sm:text-sm">
                        {category.summary}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {category.items.map((tech) => (
                    <li key={tech}>
                      <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-graphite)] bg-[#0B0B0D] px-3.5 py-2 font-mono text-xs font-medium text-[var(--color-white)] transition-colors hover:border-banana-yellow/60 sm:text-sm">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[var(--color-yellow)]"
                        />
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
