"use client";

import { getSession } from "@/lib/auth";

export default async function User() {
  const user = await getSession();
  return <>{user ? <div>logout</div> : <div>login</div>}</>;
}
