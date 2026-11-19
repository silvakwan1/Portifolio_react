"use client";

import { useState, type FormEvent } from "react";
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

const PROJECT_TYPES = [
  "Aplicativo Mobile",
  "Sistema Empresarial",
  "Site ou Plataforma Web",
  "API e Integrações",
  "Consultoria",
  "Manutenção e Evolução",
] as const;

function formatPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactCta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    let success = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(CONTACT_INFO.email);
        success = true;
      } catch {
        success = false;
      }
    }

    if (!success) {
      try {
        const tempInput = document.createElement("input");
        tempInput.value = CONTACT_INFO.email;
        tempInput.setAttribute("readonly", "");
        tempInput.style.position = "fixed";
        tempInput.style.opacity = "0";
        document.body.appendChild(tempInput);
        tempInput.select();
        success = document.execCommand("copy");
        document.body.removeChild(tempInput);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    }
  }

  function validateForm(): boolean {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const phoneDigits = phone.replace(/\D/g, "");
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg("Por favor, informe seu nome completo.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg("Por favor, informe um endereço de e-mail válido.");
      return false;
    }

    if (phoneDigits.length < 10) {
      setErrorMsg("Por favor, informe seu número de telefone/WhatsApp com DDD.");
      return false;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg("Descreva brevemente sua ideia ou necessidade (mínimo de 10 caracteres).");
      return false;
    }

    setErrorMsg(null);
    return true;
  }

  async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setSavedSuccess(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          projectType,
          message: message.trim(),
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setErrorMsg(data.error || "Não foi possível enviar sua mensagem. Tente novamente.");
        return;
      }

      setName("");
      setEmail("");
      setPhone("");
      setProjectType(PROJECT_TYPES[0]);
      setMessage("");
      setSavedSuccess(true);
    } catch {
      setErrorMsg("Erro de comunicação ao enviar sua mensagem. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contato"
      className="border-b border-[var(--color-graphite)] bg-[#101014] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left CTA Info */}
          <div className="min-w-0 lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-yellow)]">
              CHAMADA PARA AÇÃO
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--color-white)] sm:text-4xl">
              TEM UMA IDEIA?{" "}
              <span className="text-[var(--color-yellow)]">VAMOS TIRÁ-LA DO PAPEL.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-gray)]">
              Solicite um orçamento sem compromisso pelo formulário ao lado ou fale diretamente pelo
              WhatsApp para alinharmos o escopo do seu aplicativo, sistema, consultoria ou site.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact-name"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-yellow)] px-5 py-3.5 text-sm font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)]"
              >
                Solicitar Orçamento
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-banana-yellow/50 bg-[var(--color-black)] px-5 py-3.5 text-sm font-semibold text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
              >
                <MessageSquare className="h-4 w-4 text-[var(--color-yellow)]" aria-hidden="true" />
                WhatsApp {CONTACT_INFO.whatsappDisplay}
              </a>
            </div>

            {/* Verified Direct Channels */}
            <div className="mt-8 space-y-3 rounded-2xl border border-[var(--color-graphite)] bg-[var(--color-black)] p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-gray)]">
                Canais diretos
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-4 py-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail
                    className="h-4 w-4 shrink-0 text-[var(--color-yellow)]"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="truncate font-mono text-xs text-[var(--color-white)] hover:text-[var(--color-yellow)] sm:text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copiar endereço de e-mail"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-graphite)] bg-[var(--color-black)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--color-white)] transition-colors hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
                      E-mail copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[var(--color-yellow)]" aria-hidden="true" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <div aria-live="polite" className="sr-only">
                {copied ? "Endereço de e-mail copiado para a área de transferência." : ""}
              </div>
            </div>
          </div>

          {/* Right Accessible Contact Form */}
          <div className="min-w-0 lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmitForm}
              className="rounded-2xl border border-[var(--color-graphite)] bg-[var(--color-black)] p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-[var(--color-white)]"
                  >
                    Nome completo
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome ou empresa"
                    className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-banana-gray focus:border-[var(--color-yellow)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-[var(--color-white)]"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@suaempresa.com"
                    className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-banana-gray focus:border-[var(--color-yellow)]"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-[var(--color-white)]"
                  >
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                    placeholder="(61) 99999-9999"
                    className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-banana-gray focus:border-[var(--color-yellow)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block text-sm font-semibold text-[var(--color-white)]"
                  >
                    Tipo de projeto
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-4 py-3 text-sm text-[var(--color-white)] focus:border-[var(--color-yellow)]"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-[#141418] text-[var(--color-white)]"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-[var(--color-white)]"
                >
                  Descreva sua ideia ou necessidade
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explique brevemente o objetivo do projeto, o problema atual e o que você gostaria de construir..."
                  className="mt-2 w-full rounded-xl border border-[var(--color-graphite)] bg-[#141418] px-4 py-3 text-sm text-[var(--color-white)] placeholder:text-banana-gray focus:border-[var(--color-yellow)]"
                />
              </div>

              {/* Validation or Confirmation Feedback */}
              <div aria-live="polite" className="mt-4">
                {errorMsg && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-red-400/50 bg-red-950/40 px-4 py-3 text-xs text-red-200 sm:text-sm"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {savedSuccess && !errorMsg && (
                  <div className="rounded-xl border border-banana-yellow/50 bg-banana-yellow/10 px-4 py-3.5 text-xs text-[var(--color-white)] sm:text-sm">
                    <p className="inline-flex items-center gap-2 font-semibold text-[var(--color-yellow)]">
                      <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Mensagem enviada com sucesso!
                    </p>
                    <p className="mt-1 text-[var(--color-gray)]">
                      Recebi sua solicitação e entrarei em contato em breve.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-yellow)] px-6 py-3.5 text-sm font-bold text-[var(--color-black)] transition-colors hover:bg-[var(--color-yellow-dark)] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {submitting ? "Enviando..." : "Enviar Solicitação"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
