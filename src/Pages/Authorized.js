import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authorized = () => {
  const [isStored, setIsStored] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const url = window.location.hash.split("&")[0].slice(14);
    window.localStorage.setItem("accessToken", url);
    setIsStored(true);
  }, []);

  useEffect(() => {
    if (isStored) {
      navigate("/");
    }
  }, [isStored]);

  return <div>Authorized, Wait till we redirect you to your home page.</div>;
};

export default Authorized;
