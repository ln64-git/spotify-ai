"use client";
import Footer from "@/components/footer";
import { Login } from "@/components/login";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {!session && <Login session={session} status={status} />}
      <Footer session={session} />
    </div>
  );
}
