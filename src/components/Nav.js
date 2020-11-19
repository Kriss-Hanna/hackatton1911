import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [user, setUSer] = useState(false);

  const login = () => {
    setUSer(!user);
  };
  

  return (
    <div className="nav">
      <img src="https://cdn.discordapp.com/attachments/778906169681903616/778935603437109248/logohaka.png" />
      <div className="connect">
        <button onClick={login}> Connexion </button>
        {user && (
          <form>
            <label> Identifiant </label>
            <input type="text" placeholder="Enter your name" />

            <label> email</label>
            <input type="text" placeholder="Enter your name" />
            <input type="submit" value="send" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Nav;
