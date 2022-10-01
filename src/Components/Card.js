import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <img src={data.track.album.images[0].url} alt="" />
      <h5>{data.track.name}</h5>
      <div className="artists">
        {data.track.artists &&
          data.track.artists
            .slice(0, 2)
            .map((artist) => <p key={artist.id}>{artist.name}</p>)}
      </div>
    </div>
  );
};

export default Card;
