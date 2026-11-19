import {
  ArrowRight,
  MessageSquare,
  Layers,
  Server,
  Database,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[var(--color-graphite)] bg-[var(--color-black)] bg-tech-grid"
    >
      {/* Subtle architectural radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-banana-yellow/[0.08] blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Copy Column */}
        <div className="min-w-0 lg:col-span-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-banana-yellow/45 bg-banana-graphite/80 px-4 py-1.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[var(--color-yellow)]"
            />
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-yellow)]">
              DESENVOLVEDOR FULL STACK
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-[var(--color-white)] sm:text-5xl lg:text-[3.25rem]">
            TRANSFORMO IDEIAS EM{" "}
            <span className="text-[var(--color-yellow)]">SOLUÇÕES DIGITAIS.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-gray)] sm:text-lg">
            Aplicativos móveis, sistemas empresariais, plataformas web, APIs e consultorias sob
            medida para empresas e empreendedores que precisam de software confiável, rápido e
            alinhado ao próprio negócio.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-yellow)] px-6 py-3.5 text-sm font-bold text-[var(--color-black)] shadow-lg shadow-banana-yellow/10 transition-colors hover:bg-[var(--color-yellow-dark)]"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-6 py-3.5 text-sm font-semibold text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
            >
              <MessageSquare className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
              Falar no WhatsApp
            </a>

            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-[var(--color-gray)] underline-offset-4 transition-colors hover:text-[var(--color-yellow)] hover:underline"
            >
              Explorar Projetos
            </a>
          </div>

          {/* Grounded technical pillars (no fabricated metrics) */}
          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-[var(--color-graphite)] pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
                Atuação
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--color-white)]">
                Sistemas, Apps & Consultorias
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
                Formação
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--color-white)]">
                ADS pela UDF
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
                Marca
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--color-yellow)]">
                Silva Software
              </dd>
            </div>
          </dl>
        </div>

        {/* Technological Composition Column (STRICTLY NO people/avatars/robots) */}
        <div className="min-w-0 lg:col-span-6" aria-hidden="true">
          <div className="relative min-w-0 overflow-hidden rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-4 shadow-2xl sm:p-6">
            {/* System Console Top Bar */}
            <div className="flex items-center justify-between border-b border-[var(--color-graphite)] pb-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-yellow)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-banana-gray/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite)]" />
                <span className="ml-2 font-mono text-xs text-[var(--color-gray)]">
                  silva-software // system-blueprint
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-graphite)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--color-yellow)]">
                <span className="animate-signal h-1.5 w-1.5 rounded-full bg-[var(--color-yellow)]" />
                ONLINE
              </span>
            </div>

            {/* Architecture Layer Cards + SVG Connection Lines */}
            <div className="relative mt-5 space-y-4">
              {/* Layer 1: Interface & Produto */}
              <div className="rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-banana-yellow/15 text-[var(--color-yellow)]">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-[var(--color-white)]">
                        Camada de Interface & Experiência
                      </p>
                      <p className="font-mono text-xs text-[var(--color-gray)]">
                        React • Next.js • React Native • Expo
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md border border-banana-yellow/40 px-2 py-0.5 font-mono text-[11px] text-[var(--color-yellow)]">
                    UI/UX
                  </span>
                </div>
              </div>

              {/* SVG Circuit Connector 1 -> 2 */}
              <div className="flex justify-center">
                <svg width="160" height="24" viewBox="0 0 160 24" fill="none" className="block">
                  <line
                    x1="80"
                    y1="0"
                    x2="80"
                    y2="24"
                    stroke="#FFE135"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="80" cy="12" r="3.5" fill="#FFE135" />
                  <path d="M24 12 H68 M92 12 H136" stroke="#252529" strokeWidth="1.5" />
                  <circle cx="24" cy="12" r="2.5" fill="#A6A6A6" />
                  <circle cx="136" cy="12" r="2.5" fill="#A6A6A6" />
                </svg>
              </div>

              {/* Layer 2: API & Regras de Negócio */}
              <div className="rounded-xl border border-banana-yellow/40 bg-[#17171C] p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-yellow)] text-[var(--color-black)]">
                      <Server className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-[var(--color-white)]">
                        Núcleo de Regras & APIs REST
                      </p>
                      <p className="font-mono text-xs text-[var(--color-gray)]">
                        Node.js • Fastify • PHP • Laravel • Python
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-[var(--color-yellow)] px-2 py-0.5 font-mono text-[11px] font-bold text-[var(--color-black)]">
                    200 OK
                  </span>
                </div>
              </div>

              {/* SVG Circuit Connector 2 -> 3 */}
              <div className="flex justify-center">
                <svg width="160" height="24" viewBox="0 0 160 24" fill="none" className="block">
                  <line
                    x1="80"
                    y1="0"
                    x2="80"
                    y2="24"
                    stroke="#FFE135"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="80" cy="12" r="3.5" fill="#D6B900" />
                </svg>
              </div>

              {/* Layer 3: Dados & Segurança */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] p-3.5">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-[var(--color-yellow)]" />
                    <span className="font-display text-xs font-semibold text-[var(--color-white)]">
                      Persistência Relacional
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-[11px] text-[var(--color-gray)]">
                    PostgreSQL • Prisma • Supabase
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] p-3.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[var(--color-yellow)]" />
                    <span className="font-display text-xs font-semibold text-[var(--color-white)]">
                      Estrutura & Cloud
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-[11px] text-[var(--color-gray)]">
                    Firebase • Autenticação • RLS
                  </p>
                </div>
              </div>

              {/* Code/Terminal Strip */}
              <div className="min-w-0 rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] px-4 py-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-[var(--color-gray)]">
                  <Terminal className="h-3.5 w-3.5 shrink-0 text-[var(--color-yellow)]" />
                  <span className="truncate">GET /api/v1/solucoes</span>
                  <span className="ml-auto shrink-0 text-[var(--color-yellow)]">JSON</span>
                </div>
                <p className="mt-1.5 break-all text-[var(--color-white)] sm:break-normal">
                  {"{ \"foco\": \"negocio\", \"qualidade\": \"sob_medida\" }"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
