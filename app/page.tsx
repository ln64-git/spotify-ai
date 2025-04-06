"use client"
import { Button } from "@heroui/button";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const [login, setLogin] = useState(false); // <-- use state
  const { data: session } = useSession();

  const loginToSpotify = () => {
    signIn("spotify"); // this will redirect to Spotify login
    setLogin(!login)
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="p-4 text-xl">Login to Spotify</div>
        <div>
          <Button
            onPress={() => signIn("spotify")}
            variant="flat"
            radius="md"
          >
            Login
          </Button>
        </div>
      </div>

      <div className="p-4 text-xs text-center font-extralight">
        {session ? (
          <div className="text-green-500">logged in.</div>
        ) : (
          <div className="text-red-500">not logged in.</div>
        )}
      </div>
    </div>
  );
}
