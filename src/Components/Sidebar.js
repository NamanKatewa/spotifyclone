import axios from "axios";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState(null);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/playlists?limit=50", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setPlaylists(res.data.items);
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="top">
        <a href="">Your Library</a>
        <br />
        <a href="">Create Playlist</a>
        <br />
        <a href="">Liked Songs</a>
        <br />
        <a href="">Your Episodes</a>
      </div>
      <div className="playlists">
        {playlists &&
          playlists.map((p) => (
            <a href="#" key={p.id}>
              {p.name}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
