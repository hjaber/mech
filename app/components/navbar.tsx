import User from "@/app/components/user";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <div>home</div>
      <div>about</div>
      <div>product</div>
      <Suspense fallback={<div>loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </nav>
  );
}
