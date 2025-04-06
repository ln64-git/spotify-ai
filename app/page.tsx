"use client"
import { Button } from "@heroui/button";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false); // <-- use state

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Centered login content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="p-4 text-xl">Login to Spotify</div>
        <div>
          <Button onPress={() => setLogin(!login)} // <-- toggle state
            variant="flat"
            radius="md"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Status pinned to the bottom */}
      <div className="p-4 text-xs text-center font-extralight">
        {login ? (
          <div className="text-green-500">logged in.</div>
        ) : (
          <div className="text-red-500">not logged in.</div>
        )}
      </div>
    </div >
  );
}
