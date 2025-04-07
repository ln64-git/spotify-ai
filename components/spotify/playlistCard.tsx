"use client";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

type PlaylistCardProps = {
  playlist: SpotifyPlaylist;
};

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex items-center">
        <Image
          src={playlist.images[0]?.url ?? "/default_playlist_image.jpg"}
          alt={`${playlist.name} cover`}
          className="w-12 h-12 rounded-lg mr-4"
        />
        <div>
          <h3 className="text-md font-medium">{playlist.name}</h3>
          <p className="text-sm text-gray-500">
            {playlist.tracks.total} tracks
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-600">{playlist.description}</p>
      </CardBody>
      <CardFooter>
        <Button
          as="a"
          href={playlist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="primary"
        >
          Open in Spotify
        </Button>
      </CardFooter>
    </Card>
  );
}
