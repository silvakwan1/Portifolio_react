import { Code2, Compass, Layers3 } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Visão orientada ao negócio",
    text: "Cada tela, regra de negócio e integração parte da realidade operacional da empresa, evitando complexidade desnecessária.",
  },
  {
    icon: Code2,
    title: "Construção ponta a ponta",
    text: "Do layout responsivo ao back-end e banco de dados, desenvolvendo aplicativos, sistemas web e APIs com padrão técnico consistente.",
  },
  {
    icon: Layers3,
    title: "Base preparada para evoluir",
    text: "Código organizado, tipagem estática e arquitetura modular para que o sistema acompanhe novas demandas com segurança.",
  },
] as const;

const COURSES = ["DevMídia", "DIO.me", "Rocketseat", "Ada School"] as const;

export function About() {
  return (
    <section
      id="sobre"
      className="border-b border-[var(--color-graphite)] bg-[#101014] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
              SOBRE MIM
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
              TECNOLOGIA COM PROPÓSITO.{" "}
              <span className="text-[var(--color-yellow)]">SOLUÇÕES COM RESULTADO.</span>
            </h2>
          </div>

          <div className="min-w-0 space-y-5 text-base leading-relaxed text-[var(--color-gray)] lg:col-span-7">
            <p>
              Sou <strong className="font-semibold text-[var(--color-white)]">Kauan Silva</strong>,
              desenvolvedor Full Stack à frente da{" "}
              <strong className="font-semibold text-[var(--color-white)]">Silva Software</strong>,{" "}
              <strong className="font-semibold text-[var(--color-yellow)]">
                formado em ADS pela UDF
              </strong>
              . Atuo na criação de aplicativos, sistemas empresariais, plataformas web, APIs e{" "}
              <strong className="font-semibold text-[var(--color-white)]">consultorias</strong> para
              empresários e empreendedores que buscam transformar processos manuais ou novas ideias
              em produtos digitais bem estruturados.
            </p>
            <p>
              Acredito que tecnologia só cumpre seu papel quando gera clareza para quem gerencia e
              praticidade para quem usa. Por isso, além do desenvolvimento sob medida, realizo{" "}
              <strong className="font-semibold text-[var(--color-white)]">consultorias</strong>{" "}
              focadas em comunicação direta, código limpo e decisões técnicas coerentes com o
              momento de cada projeto.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
                Formação acadêmica:
              </span>
              <span className="rounded-md border border-banana-yellow/60 bg-banana-yellow/10 px-2.5 py-1 font-mono text-xs font-semibold text-[var(--color-yellow)]">
                Formado em ADS pela UDF
              </span>
              <span className="rounded-md border border-[var(--color-graphite)] bg-[var(--color-black)] px-2.5 py-1 font-mono text-xs text-[var(--color-white)]">
                Consultorias
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
                Formação contínua:
              </span>
              {COURSES.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-[var(--color-graphite)] bg-[var(--color-black)] px-2.5 py-1 font-mono text-xs text-[var(--color-white)]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-[var(--color-graphite)] bg-[var(--color-black)] p-6 transition-colors hover:border-banana-yellow/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-banana-yellow/15 text-[var(--color-yellow)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[var(--color-white)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray)]">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
