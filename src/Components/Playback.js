import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";

const Playback = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [currentSongCover, setCurrentSongCover] = useState({});
  const [currentSongMetadata, setCurrentSongMetadata] = useState({});
  const [currentMs, setCurrentMs] = useState("");
  const [totalMs, setTotalMs] = useState("");
  const [progress, setProgress] = useState("");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setCurrentSongCover(res.data.item.album.images[2].url);
        setCurrentSongMetadata(res.data.item);
        setCurrentMs(res.data.progress_ms);
        setTotalMs(res.data.item.duration_ms);
      });
  }, []);

  useEffect(() => {
    setProgress(Math.trunc((Number(currentMs) / Number(totalMs)) * 100));
  }, [currentMs]);

  return (
    <div className="playback">
      <div className="info">
        <img id="songCover" src={currentSongCover} alt="" />
        <div className="details">
          <a href="" id="songName">
            {currentSongMetadata && currentSongMetadata.name}
          </a>
          <div className="artists">
            {currentSongMetadata.artists &&
              currentSongMetadata.artists.map((artist) => (
                <a key={artist.id} href="">
                  {artist.name}
                </a>
              ))}
          </div>
        </div>
        <img src="/heart.png" alt="" id="like" />
      </div>
      <div className="controls">
        <div className="buttons">
          <img src="/shuffle.png" alt="" />
          <img src="/previous.png" alt="" />
          <img id="pause" src="/pause.png" alt="" />
          <img src="/next.png" alt="" />
          <img src="/repeat.png" alt="" />
        </div>
        <ProgressBar
          completed={progress}
          height="5px"
          customLabel=" "
          barContainerClassName="progressBar"
          bgColor="#ffffff"
        />
      </div>
      <div className="volume">
        <img src="/lyrics.png" alt="" />
        <img src="/sound.png" alt="" />
        <ProgressBar
          completed={100}
          height="3px"
          width="200px"
          customLabel=" "
        />
      </div>
    </div>
  );
};

export default Playback;
