"use client";
import { useSession } from "next-auth/react";
import { Image } from "@heroui/image";
import Footer from "@/components/ui/footer";
import { Login } from "@/components/ui/login";
import { Playlists } from "@/components/spotify/playlists";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {!session && <Login session={session} status={status} />}

      {session && (
        <div className="flex flex-col items-center mt-6">
          <Image
            src={session.user?.image ?? ""}
            alt="User avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="text-sm text-gray-400 mb-4">{session.user?.name}</p>

          <Playlists session={session} />
        </div>
      )}

      {/* <Footer session={session} /> */}
    </div>
  );
}
