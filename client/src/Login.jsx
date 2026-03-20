import { useState } from "react";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("https://authentication-systems.onrender.com/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);

    alert("Login success!");
    window.location.href = "/profile";
  };

  return (
  <div className="container">
    <div className="box">
      <h2>Login</h2>

      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button" onClick={login}>
        Login
      </button>
    </div>
  </div>
);
}

export default Login;
