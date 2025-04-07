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
      {/* Gradient background */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent pointer-events-none -z-10" />

      {/* Text on top of gradient */}
      {isLoggedIn ? (
        <div
          className="text-green-500 cursor-pointer hover:underline"
          onClick={() => signOut()}
        >
          logged in
        </div>
      ) : (
        <div className="text-red-500">not logged in</div>
      )}
    </div>
  );
}
