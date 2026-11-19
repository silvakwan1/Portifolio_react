"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Lock, LogIn, AlertCircle, ArrowLeft, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg(null);

    if (!username.trim() || !password) {
      setErrorMsg("Preencha seu usuário/e-mail e senha.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setErrorMsg(data.error || "Credenciais inválidas.");
        setLoading(false);
        return;
      }

      window.location.assign("/admin");
    } catch {
      setErrorMsg("Falha ao conectar com o servidor de autenticação.");
      setLoading(false);
    }
  }

  return (
    <main
      id="conteudo-principal"
      className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-black)] bg-tech-grid px-4 py-12"
    >
      <div className="w-full max-w-md rounded-2xl border border-[var(--color-graphite)] bg-[#121216] p-6 shadow-2xl sm:p-8">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-banana-yellow/45 bg-banana-graphite/80 px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
              PAINEL ADMIN • JWT
            </span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-gray)] transition-colors hover:text-[var(--color-yellow)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Portfólio
          </Link>
        </div>

        <h1 className="mt-5 font-display text-2xl font-bold text-[var(--color-white)] sm:text-3xl">
          Acesso{" "}
          <span className="text-[var(--color-yellow)]">Administrativo</span>
        </h1>
        <p className="mt-2 text-sm text-[var(--color-gray)]">
          Autentique-se para visualizar as mensagens e solicitações de orçamento salvas no SQLite.
        </p>

        <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="admin-username"
              className="block text-sm font-semibold text-[var(--color-white)]"
            >
              Usuário ou E-mail
            </label>
            <input
              id="admin-username"
              name="username"
              type="text"
              required
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin ou silvakwan7@gmail.com"
              className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-banana-gray focus:border-[var(--color-yellow)]"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-sm font-semibold text-[var(--color-white)]"
            >
              Senha
            </label>
            <input
              id="admin-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#0B0B0D] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-banana-gray focus:border-[var(--color-yellow)]"
            />
          </div>

          {errorMsg && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl border border-red-400/50 bg-red-950/40 px-4 py-3 text-xs text-red-200 sm:text-sm"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-yellow)] px-6 py-3.5 text-sm font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Lock className="h-4 w-4" aria-hidden="true" />
                Validando JWT...
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Entrar no Painel
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
