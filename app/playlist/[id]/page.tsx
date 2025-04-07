import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface PlaylistPageProps {
  params: Promise<{ id: string }>;
}

export default async function PlaylistPage(props: PlaylistPageProps) {
  const params = await props.params;
  const session = await getServerSession(authOptions);

  if (!session || !(session as any).accessToken) {
    redirect("/");
  }

  const accessToken = (session as any).accessToken;

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

// ✅ Safe server-side fetch with error handling
async function fetchPlaylist(id: string, accessToken: string) {
  try {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store", // optional: disables Next.js cache
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch playlist:", error);
    return null;
  }
}
