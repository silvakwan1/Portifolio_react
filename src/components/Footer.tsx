import Image from "next/image";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--color-black)] py-12 text-sm text-[var(--color-gray)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-graphite)] bg-[#141418] p-1.5">
                <Image
                  src={CONTACT_INFO.logoPath}
                  alt="Logo Silva Software"
                  width={32}
                  height={24}
                  loading="eager"
                  className="h-auto w-7 object-contain"
                />
              </div>
              <div>
                <p className="font-display text-base font-bold text-[var(--color-white)]">
                  SILVA <span className="text-[var(--color-yellow)]">SOFTWARE</span>
                </p>
                <p className="font-mono text-xs text-[var(--color-gray)]">
                  {CONTACT_INFO.ownerName} • {CONTACT_INFO.roleTitle}
                </p>
              </div>
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-[var(--color-gray)]">
              Desenvolvimento de aplicativos, sistemas empresariais, aplicações web e APIs sob
              medida.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[var(--color-yellow)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contacts */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-white)]">
              Contato & Redes
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--color-yellow)]"
                >
                  <Mail className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--color-yellow)]"
                >
                  <MessageSquare
                    className="h-4 w-4 text-[var(--color-yellow)]"
                    aria-hidden="true"
                  />
                  <span>WhatsApp: {CONTACT_INFO.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--color-yellow)]"
                >
                  <Linkedin className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
                  <span>LinkedIn (/in/silva-kauan)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--color-yellow)]"
                >
                  <Github className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
                  <span>GitHub (@silvakwan1)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-graphite)] pt-6 text-xs text-[var(--color-gray)] sm:flex-row sm:items-center">
          <p>© 2026 Silva Software — Kauan Silva. Todos os direitos reservados.</p>
          <p className="font-mono text-[var(--color-gray)]">devkauan.site</p>
        </div>
      </div>
    </footer>
  );
}
