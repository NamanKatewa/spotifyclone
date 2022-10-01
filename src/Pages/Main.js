import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";

const Main = () => {
  const [tracks, setTracks] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/tracks?limit=50", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTracks(res.data.items);
      });
  }, []);

  return (
    <div className="main">
      <h3>My Tracks</h3>
      <div className="list">
        {tracks &&
          tracks.map((track) => <Card key={track.track.id} data={track} />)}
      </div>
    </div>
  );
};

export default Main;
