import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [profilePic, setProfilePic] = useState(null);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setProfilePic(res.data.images[0].url);
      });
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="search">
        <div className="home">
          <img src="/home.svg" alt="" />
        </div>
        <div className="searchBar">
          <img src="/search.svg" alt="" />
          <input type="text" placeholder="What do you want to listen to?" />
        </div>
      </div>
      <div className="profile">
        <a href="">Upgrade</a>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("accessToken");
            window.location.reload(true);
          }}
        >
          <img src={profilePic} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
