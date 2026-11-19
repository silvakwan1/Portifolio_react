import {
  Smartphone,
  Building2,
  Globe,
  Workflow,
  Wrench,
  Compass,
  Check,
} from "lucide-react";
import { SERVICES, type ServiceIconName } from "@/data/services";

const ICON_MAP: Record<ServiceIconName, typeof Smartphone> = {
  smartphone: Smartphone,
  building: Building2,
  globe: Globe,
  workflow: Workflow,
  wrench: Wrench,
  compass: Compass,
};

export function Services() {
  return (
    <section
      id="servicos"
      className="border-b border-[var(--color-graphite)] bg-[var(--color-black)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
            SERVIÇOS
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
            SOLUÇÕES DIGITAIS SOB MEDIDA PARA O SEU NEGÓCIO.
          </h2>
          <p className="mt-4 text-base text-[var(--color-gray)]">
            Da concepção da interface à integração com banco de dados e APIs, cada entrega é
            pensada para resolver problemas reais da sua operação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon];
            const indexLabel = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-6 transition-colors hover:border-banana-yellow/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-yellow)] text-[var(--color-black)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[var(--color-gray)] group-hover:text-[var(--color-yellow)]">
                      {indexLabel}
                    </span>
                  </div>

                  <p className="mt-5 font-mono text-xs uppercase tracking-wider text-[var(--color-yellow)]">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-[var(--color-white)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray)]">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-[var(--color-graphite)] pt-4">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-banana-white/90 sm:text-sm"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-yellow)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
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
