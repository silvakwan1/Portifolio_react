import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  signAdminJwt,
  verifyAdminCredentials,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      username?: unknown;
      email?: unknown;
      password?: unknown;
    };

    const identifier =
      typeof body.username === "string" && body.username.trim().length > 0
        ? body.username.trim()
        : typeof body.email === "string"
        ? body.email.trim()
        : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Informe usuário/e-mail e senha." },
        { status: 400 }
      );
    }

    const { valid, subject } = verifyAdminCredentials(identifier, password);
    if (!valid) {
      return NextResponse.json(
        { error: "Credenciais inválidas." },
        { status: 401 }
      );
    }

    const token = signAdminJwt(subject);
    const response = NextResponse.json({ ok: true, user: subject }, { status: 200 });

    const isHttps =
      request.url.startsWith("https://") ||
      request.headers.get("x-forwarded-proto") === "https";

    response.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: isHttps,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Requisição de login inválida." },
      { status: 400 }
    );
  }
}
