import { getSession } from "@/lib/auth";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <div className="flex gap-4">
      <div>home</div>
      <div>about</div>
      <div>product</div>
      <Suspense fallback={<div>loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  );
}

async function User() {
  const user = await getSession();
  return <>{user ? <div>logout</div> : <div>login</div>}</>;
}
