"use client";
import { Button } from "@heroui/button";
import { signIn } from "next-auth/react";
import type { Session } from "next-auth";

interface LoginProps {
  session: Session | null;
  status: "authenticated" | "unauthenticated" | "loading";
}

export function Login({ session, status }: LoginProps) {
  const isLoading = status === "loading";
  const isLoggedIn = !!session;

  const loginToSpotify = () => {
    signIn("spotify");
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      {!isLoggedIn && !isLoading ? (
        <>
          <div className="p-4 text-xl">Login to Spotify</div>
          <Button onPress={loginToSpotify} variant="flat" radius="md">
            Login
          </Button>
        </>
      ) : isLoggedIn ? (
        <div className="text-xl">Welcome, {session.user?.name || "User"}!</div>
      ) : (
        <div className="text-gray-500">Loading...</div>
      )}
    </div>
  );
}
