"use client";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { PlaylistCard } from "./playlistCard"; // adjust path as needed

type PlaylistsProps = {
  session: Session;
};

export function Playlists({ session }: PlaylistsProps) {
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (!session?.accessToken) return;

      const res = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });

      const data = await res.json();
      setPlaylists(data.items || []);
    };

    fetchPlaylists();
  }, [session]);

  return (
    <div className="w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Your Playlists</h2>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}
