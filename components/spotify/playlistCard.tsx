"use client";
import { Button } from "@heroui/button";
import { Card, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

type PlaylistCardProps = {
  playlist: SpotifyPlaylist;
};

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <Card className="mb-6 rounded-2xl shadow-md bg-neutral-900 text-white transition hover:shadow-lg">
      <CardHeader className="flex justify-between items-center p-4">
        {/* Left: Clickable Image + Text */}
        <div className="flex items-center gap-4">
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src={playlist.images[0]?.url ?? "/default_playlist_image.jpg"}
              alt={`${playlist.name} cover`}
              className="w-20 h-20 rounded-xl object-cover shadow"
            />
          </a>
          <div>
            <h3 className="text-lg font-semibold">{playlist.name}</h3>
            <p className="text-sm text-neutral-400">{playlist.tracks.total} tracks</p>
          </div>
        </div>

        {/* Right: Button */}
        <div className="flex flex-col gap-2">
          <Button
            as="a"
            href={`/playlist/${playlist.id}`}
            size="sm"
            color="primary"
            variant="light"
            className="px-5 py-2 text-sm font-medium  hover:scale-105 transition-transform"
          >
            Open Chat
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
