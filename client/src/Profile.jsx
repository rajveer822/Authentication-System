import { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";

function Profile() {
  const [data, setData] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Authorization: "Bearer " + token,   
        },
      })
      .then((res) => setData("Welcome user"))
      .catch(() => setData("Access denied"));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
  <div className="container">
    <div className="box">
      <h2>Profile</h2>

      <p className="text">{data}</p>

      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
);
}

export default Profile;