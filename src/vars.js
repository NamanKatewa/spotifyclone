const vars = {
  authenticateUrl: "https://accounts.spotify.com/authorize",
  clientId: "b6a36a57435f45e295244bb4f0db3135",
};

export const spotifyScopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
  "user-read-playback-position",
  "user-library-modify",
  "user-library-read",
  "user-read-email",
  "user-read-private",
  "user-top-read",
];

export default vars;
