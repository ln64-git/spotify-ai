"use client";
import { signOut } from "next-auth/react";
import type { Session } from "next-auth";

type FooterProps = {
  session: Session | null;
};

export default function Footer({ session }: FooterProps) {
  const isLoggedIn = !!session;

  return (
    <div className="fixed bottom-0 left-0 w-full p-6 text-xs text-center font-extralight">
      {isLoggedIn ? (
        <div
          className="text-green-500 cursor-pointer hover:underline"
          onClick={() => signOut()}
        >
          logged in. (click to log out)
        </div>
      ) : (
        <div className="text-red-500">not logged in.</div>
      )}
    </div>
  );
}
