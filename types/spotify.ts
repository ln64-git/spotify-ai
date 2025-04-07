type SpotifyPlaylist = {
  id: string;
  name: string;
  images: { url: string }[];
  description: string;
  tracks: { total: number };
  external_urls: { spotify: string };
};
