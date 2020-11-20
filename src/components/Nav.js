import { useState } from "react";
import "./Nav.css";


function Nav() {
  const [user, setUSer] = useState(false);

  const [logUser, setLogUser] = useState({
    firstName: "",
    lastName : "",
  });

  const login = () => {
    setUSer(!user);
  };

  const change = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };
  console.log(logUser);

  // const submit = (e) => {   
  //   e.preventDefault();
  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: qs.stringify(this.state),
  //   };

  //   const url = "...";

  //   fetch(url, config)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.error) {
  //         alert(res.error);
  //       } else {
  //         alert(`Your ad for ${res} has been published!`);
  //       }
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //       alert("Your ad has not been published, please start over.");
  //     });
  // };
console.log(logUser)
  return (
    <div className="nav">
      <img src="logohaka.png" alt="logo" />
      <div className="connect">
        <button onClick={login}> Connexion </button>
        {user && (
          <form >
            <label> Identifiant </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="firstName"
              onChange={change}
              value={logUser.firstName}
            />

            <label> email</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="lastName"
              onChange={change}
              value={logUser.lastName}
            />
            <input type="submit" value="send" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Nav;
