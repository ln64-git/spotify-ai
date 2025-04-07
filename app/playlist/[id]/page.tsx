// app/playlist/[id]/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { fetchPlaylist } from "@/spotify/fetchPlaylists";

interface PlaylistPageProps {
  params: { id: string };
}

export default async function PlaylistPage(props: PlaylistPageProps) {
  const params = await Promise.resolve(props.params);
  const session = await getServerSession(authOptions);
  const accessToken = (session as any)?.accessToken;

  if (!accessToken) {
    redirect("/");
  }

  const playlist = await fetchPlaylist(params.id, accessToken);

  if (!playlist) {
    return (
      <div className="text-red-500 p-4">
        Failed to load playlist. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{playlist.name}</h1>
      {playlist.description && (
        <p className="text-neutral-400 mb-6">{playlist.description}</p>
      )}

      <ul className="space-y-4">
        {playlist.tracks.items.map((item: any, i: number) => (
          <li key={i} className="bg-neutral-800 p-4 rounded-lg shadow">
            <p className="font-medium">{item.track.name}</p>
            <p className="text-sm text-neutral-400">
              {item.track.artists.map((a: any) => a.name).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

