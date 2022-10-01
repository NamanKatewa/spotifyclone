import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Playback from "../Components/Playback";
import Sidebar from "../Components/Sidebar";
import Main from "./Main";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Playback />
      <Main />
    </>
  );
};

export default Home;
