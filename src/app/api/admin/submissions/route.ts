import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminJwt } from "@/lib/auth";
import { listContactSubmissions } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminJwt(token);

  if (!session) {
    return NextResponse.json(
      { error: "Acesso não autorizado. Token JWT ausente ou inválido." },
      { status: 401 }
    );
  }

  const submissions = listContactSubmissions();
  return NextResponse.json(
    {
      ok: true,
      user: session.sub,
      submissions,
    },
    { status: 200 }
  );
}
