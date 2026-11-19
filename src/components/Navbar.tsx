"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-graphite)] bg-banana-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 rounded-lg py-1 pr-2 transition-opacity hover:opacity-90"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-graphite)] bg-[#141418] p-1.5">
            <Image
              src={CONTACT_INFO.logoPath}
              alt="Logo Silva Software"
              width={32}
              height={24}
              priority
              className="h-auto w-7 object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-wide text-[var(--color-white)] sm:text-base">
              SILVA <span className="text-[var(--color-yellow)]">SOFTWARE</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-gray)]">
              {CONTACT_INFO.ownerName}
            </span>
          </div>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--color-gray)] transition-colors hover:bg-banana-graphite/70 hover:text-[var(--color-white)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden items-center gap-1.5 rounded-lg bg-[var(--color-yellow)] px-4 py-2.5 text-sm font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)] sm:inline-flex"
          >
            Solicitar Orçamento
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-graphite)] bg-[#141418] text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        hidden={!menuOpen}
        className="border-t border-[var(--color-graphite)] bg-[#0B0B0D] px-4 pb-5 pt-3 lg:hidden"
      >
        <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3.5 py-3 text-base font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-graphite)] hover:text-[var(--color-yellow)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-yellow)] px-4 py-3 text-sm font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)]"
          >
            Solicitar Orçamento
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
