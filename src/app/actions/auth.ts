"use server";

import { login as authLogin, createSession, logout as authLogout, getSession } from "@/lib/auth";

export async function loginAction(
  prevState: { error: string; success?: boolean } | null,
  formData: FormData
): Promise<{ error: string; success?: boolean }> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  
  if (!username || !password) {
    return { error: "Username and password are required" };
  }
  
  const user = await authLogin(username, password);
  
  if (!user) {
    return { error: "Invalid credentials" };
  }
  
  await createSession(user);
  return { error: "", success: true };
}

export async function logoutAction(): Promise<void> {
  await authLogout();
}

export async function checkAuth(): Promise<boolean> {
  const session = await getSession();
  return session !== null;
}
