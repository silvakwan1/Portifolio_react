import { NextResponse } from "next/server";
import { insertContactSubmission } from "@/lib/db";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      phone?: unknown;
      projectType?: unknown;
      message?: unknown;
    };

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const phoneDigits = phone.replace(/\D/g, "");
    const projectType =
      typeof body.projectType === "string" && body.projectType.trim().length > 0
        ? body.projectType.trim()
        : "Projeto Sob Medida";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Por favor, informe seu nome completo (mínimo de 2 caracteres)." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Por favor, informe um endereço de e-mail válido." },
        { status: 400 }
      );
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Por favor, informe um número de telefone/WhatsApp válido com DDD." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Descreva brevemente sua ideia ou necessidade (mínimo de 10 caracteres)." },
        { status: 400 }
      );
    }

    const saved = insertContactSubmission({
      name,
      email,
      phone,
      projectType,
      message,
    });

    return NextResponse.json(
      {
        ok: true,
        submission: saved,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Não foi possível registrar sua mensagem. Verifique os dados informados." },
      { status: 400 }
    );
  }
}
