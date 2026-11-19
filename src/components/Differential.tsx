import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const GENERIC_LIMITS = [
  "Obriga a equipe a adaptar rotinas a fluxos engessados",
  "Cobra por módulos que a empresa não utiliza",
  "Dificulta integrações com ferramentas internas e APIs próprias",
  "Suporte distante quando surge uma necessidade específica",
] as const;

const CUSTOM_ADVANTAGES = [
  "Desenhado exatamente para as regras e etapas da sua operação",
  "Interface direta ao ponto, reduzindo retrabalho manual e planilhas",
  "Integrações sob medida entre web, aplicativo móvel e banco de dados",
  "Contato direto com quem projeta e evolui o código do seu sistema",
] as const;

export function Differential() {
  return (
    <section
      id="diferencial"
      className="border-b border-[var(--color-graphite)] bg-[var(--color-black)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
            DIFERENCIAL COMERCIAL
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
            SUA EMPRESA NÃO PRECISA SE ADAPTAR A UM{" "}
            <span className="text-[var(--color-yellow)]">SOFTWARE GENÉRICO.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-gray)]">
            Softwares prontos atendem médias genéricas, mas quase sempre deixam lacunas que viram
            planilhas paralelas. Uma solução sob medida organiza o fluxo real do seu negócio desde o
            primeiro acesso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Generic */}
          <div className="rounded-2xl border border-[var(--color-graphite)] bg-[#111115] p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-[var(--color-gray)]">
              Software genérico de prateleira
            </h3>
            <ul className="mt-6 space-y-4">
              {GENERIC_LIMITS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-gray)]"
                >
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-banana-gray/70"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bespoke Silva Software */}
          <div className="rounded-2xl border border-banana-yellow/60 bg-[#141419] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-[var(--color-white)]">
                Solução sob medida — Silva Software
              </h3>
              <span className="rounded-md bg-[var(--color-yellow)] px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--color-black)]">
                Personalizado
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {CUSTOM_ADVANTAGES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-white)]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-yellow)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[var(--color-graphite)] pt-6">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-yellow)] px-5 py-3 text-sm font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)]"
              >
                Conversar sobre meu projeto
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
