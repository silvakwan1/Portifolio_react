"use client";

import { useState } from "react";
import { PROCESS_STEPS } from "@/data/process";

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressPercent = ((activeIndex + 1) / PROCESS_STEPS.length) * 100;

  return (
    <section
      id="processo"
      className="border-b border-[var(--color-graphite)] bg-[#101014] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
              PROCESSO DE DESENVOLVIMENTO
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
              DA IDEIA À <span className="text-[var(--color-yellow)]">SOLUÇÃO.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--color-gray)]">
            Etapas claras e previsíveis para você acompanhar cada avanço do projeto sem surpresas.
          </p>
        </div>

        {/* Desktop Progress Track */}
        <div className="mt-10 hidden lg:block">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-[var(--color-graphite)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-yellow-dark)] to-[var(--color-yellow)] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = index <= activeIndex;
            const isSelected = index === activeIndex;

            return (
              <article
                key={step.number}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 text-left transition-all ${
                  isSelected
                    ? "border-[var(--color-yellow)] bg-[#16161B] shadow-lg shadow-banana-yellow/[0.05]"
                    : isActive
                      ? "border-banana-yellow/45 bg-[#121216]"
                      : "border-[var(--color-graphite)] bg-[var(--color-black)] hover:border-banana-yellow/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-bold transition-colors ${
                        isActive
                          ? "bg-[var(--color-yellow)] text-[var(--color-black)]"
                          : "bg-[var(--color-graphite)] text-[var(--color-white)] group-hover:bg-banana-yellow/20 group-hover:text-[var(--color-yellow)]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        isSelected
                          ? "bg-[var(--color-yellow)]"
                          : isActive
                            ? "bg-[var(--color-yellow-dark)]"
                            : "bg-[var(--color-graphite)]"
                      }`}
                    />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-white)]">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isSelected}
                      className="cursor-pointer rounded-md text-left after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                    >
                      <span>{step.label}</span>
                    </button>
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-gray)]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[var(--color-graphite)] pt-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-yellow)]">
                    {step.deliverable}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
