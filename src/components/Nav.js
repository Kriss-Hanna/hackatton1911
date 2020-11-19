import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [user, setUSer] = useState(false);

  const [logUser, setLogUser] = useState({
    id: "",
    email: "",
  });

  const login = () => {
    setUSer(!user);
  };

  const change = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };
  console.log(logUser)

  const submit = (e) => {
    e.preventDefault() ;
    
  }

  return (
    <div className="nav">
      <img src="logohaka.png" alt ="logo" />
      <div className="connect">
        <button onClick={login}> Connexion </button>
        {user && (
          <form  onSubmit={submit}>
            <label> Identifiant </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="id"
              onChange={change}
              value={logUser.id}
            />

            <label> email</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="email"
              onChange={change}
              value={logUser.email}
            />
            <input type="submit" value="send" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Nav;
