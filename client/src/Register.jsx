import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post("https://authentication-system-1-vioz.onrender.com/api/auth/register", {
      email,
      password,
    });

    alert("Registered!");
    window.location.href = "/login";
  };

  return (
  <div className="container">
    <div className="box">
      <h2>Register</h2>

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

      <button className="button" onClick={register}>
        Register
      </button>
    </div>
  </div>
);
}

export default Register;
