import react, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  const signUp = () => {
    let item = { name, email, password };
    let reqObject = {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    
    fetch("http://127.0.0.1:8000/api/register", reqObject)
    .then((response) => response.json())
    .then((result) => {
      window.localStorage.setItem("user-info", JSON.stringify(result));
      console.log(result);
      navigate("/dashboard");
    })
    .catch((error) => console.log("error", error));
    
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3" align="center">
        <br />
        <h1>User Registration</h1>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter Your Password"
        />
        <br />
        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </div>
  );
}
