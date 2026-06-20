import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <section className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto p-4">{children}</div>
    </section>
  );
}
