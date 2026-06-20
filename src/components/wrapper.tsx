// src/components/NavbarWrapper.tsx
export const dynamic = "force-dynamic";

import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  // Auth removed — demo has no login/admin flow
  return <Navbar />;
}
