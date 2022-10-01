import vars from "../vars";
import { spotifyScopes } from "../vars";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt=""
      />

      <a
        href={`${vars.authenticateUrl}?client_id=${
          vars.clientId
        }&redirect_uri=http://localhost:3000/authorized&scope=${spotifyScopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login
      </a>
    </div>
  );
};

export default Login;
