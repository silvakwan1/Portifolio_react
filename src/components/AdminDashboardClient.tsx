"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LogOut,
  RefreshCw,
  Mail,
  Calendar,
  Briefcase,
  User,
  Database,
  ArrowLeft,
  Inbox,
} from "lucide-react";
import type { ContactSubmissionRecord } from "@/lib/db";

interface AdminDashboardClientProps {
  initialSubmissions: ContactSubmissionRecord[];
  adminUser: string;
}

export function AdminDashboardClient({
  initialSubmissions,
  adminUser,
}: AdminDashboardClientProps) {
  const [submissions, setSubmissions] =
    useState<ContactSubmissionRecord[]>(initialSubmissions);
  const [refreshing, setRefreshing] = useState(false);

  async function handleRefresh() {
    setRefreshing(true);
    try {
      const response = await fetch("/api/admin/submissions", {
        cache: "no-store",
      });
      if (response.status === 401 || response.status === 403) {
        window.location.assign("/admin/login");
        return;
      }
      const data = (await response.json()) as {
        submissions?: ContactSubmissionRecord[];
      };
      if (Array.isArray(data.submissions)) {
        setSubmissions(data.submissions);
      }
    } finally {
      setRefreshing(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.assign("/admin/login");
  }

  function formatDate(isoOrSql: string): string {
    try {
      const date = new Date(isoOrSql);
      if (Number.isNaN(date.getTime())) return isoOrSql;
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(date);
    } catch {
      return isoOrSql;
    }
  }

  return (
    <main
      id="conteudo-principal"
      className="min-h-screen bg-[var(--color-black)] py-10 text-[var(--color-white)] sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-yellow)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--color-black)]">
                <Database className="h-3.5 w-3.5" aria-hidden="true" />
                SQLITE • ADMIN
              </span>
              <span className="font-mono text-xs text-[var(--color-gray)]">
                Sessão JWT ativa: <strong className="text-[var(--color-white)]">{adminUser}</strong>
              </span>
            </div>
            <h1 className="mt-3 font-display text-2xl font-bold text-[var(--color-white)] sm:text-3xl">
              Solicitações & Mensagens do{" "}
              <span className="text-[var(--color-yellow)]">Formulário</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] px-4 py-2.5 text-xs font-semibold text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)] sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
              Voltar ao site
            </Link>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] px-4 py-2.5 text-xs font-semibold text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)] disabled:opacity-60 sm:text-sm"
            >
              <RefreshCw
                className={`h-4 w-4 text-[var(--color-yellow)] ${
                  refreshing ? "animate-spin" : ""
                }`}
                aria-hidden="true"
              />
              Atualizar
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-yellow)] px-4 py-2.5 text-xs font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)] sm:text-sm"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Sair
            </button>
          </div>
        </div>

        {/* Summary Counter */}
        <div className="mt-6 flex items-center justify-between rounded-xl border border-[var(--color-graphite)] bg-[#101014] px-5 py-3.5">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
            Total de registros recebidos
          </span>
          <span className="rounded-lg bg-[var(--color-yellow)] px-3 py-1 font-mono text-sm font-bold text-[var(--color-black)]">
            {submissions.length}
          </span>
        </div>

        {/* Submissions List */}
        {submissions.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-12 text-center">
            <Inbox className="h-10 w-10 text-[var(--color-yellow)]" aria-hidden="true" />
            <h2 className="mt-4 font-display text-lg font-bold text-[var(--color-white)]">
              Nenhuma mensagem registrada ainda
            </h2>
            <p className="mt-1 max-w-md text-sm text-[var(--color-gray)]">
              Assim que um visitante enviar o formulário de contato na página principal, os dados
              aparecerão automaticamente aqui.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {submissions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-6 transition-colors hover:border-banana-yellow/50"
              >
                <div className="flex flex-col justify-between gap-3 border-b border-[var(--color-graphite)] pb-4 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-[var(--color-graphite)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--color-yellow)]">
                      #{item.id}
                    </span>
                    <h2 className="inline-flex items-center gap-2 font-display text-lg font-bold text-[var(--color-white)]">
                      <User className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
                      {item.name}
                    </h2>
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-gray)] hover:text-[var(--color-yellow)] sm:text-sm"
                    >
                      <Mail className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
                      {item.email}
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-banana-yellow/40 bg-banana-yellow/10 px-2.5 py-1 font-mono text-xs font-semibold text-[var(--color-yellow)]">
                      <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.project_type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-gray)]">
                      <Calendar className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
                      {formatDate(item.created_at)}
                    </span>
                  </div>
                </div>

                <p className="mt-4 whitespace-pre-wrap rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] p-4 text-sm leading-relaxed text-[var(--color-white)]">
                  {item.message}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
