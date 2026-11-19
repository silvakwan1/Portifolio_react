import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifyAdminJwt } from "@/lib/auth";
import { listContactSubmissions } from "@/lib/db";
import { AdminDashboardClient } from "@/components/AdminDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminJwt(token);

  if (!session) {
    redirect("/admin/login");
  }

  const submissions = listContactSubmissions();

  return (
    <AdminDashboardClient
      initialSubmissions={submissions}
      adminUser={session.sub}
    />
  );
}
