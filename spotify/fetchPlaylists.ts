export async function fetchPlaylist(id: string, accessToken: string) {
  try {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch playlist:", error);
    return null;
  }
}
