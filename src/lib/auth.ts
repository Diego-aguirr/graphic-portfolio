import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export interface User {
  id: string;
  username: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-key-change-in-production";

const ADMIN_USER: User = { id: "1", username: "admin" };
const ADMIN_PASSWORD = "admin123";

export async function login(username: string, password: string): Promise<User | null> {
  if (username === ADMIN_USER.username && password === ADMIN_PASSWORD) {
    return ADMIN_USER;
  }
  return null;
}

export async function createSession(user: User): Promise<string> {
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });

  return token;
}

export async function getSession(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    if (!token) return null;

    const payload = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    return { id: payload.id, username: payload.username };
  } catch {
    return null;
  }
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
