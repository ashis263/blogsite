import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Premium() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);


  return (
    <div align="center">
      <Header />
      <br />
      <br />
      <h1>Premium Subscriptions</h1>
      <h3>Pricing</h3>
      <br />
      <br />

      <div className="card">
        <div>
          <h2>Premium</h2>
          <h1>500 Taka</h1>
        </div>
        <form action={"http://127.0.0.1:8000/api/checkout/"+user.id} method="POST">
          <input type="submit" value="Pay now" />
        </form>
      </div>
    </div>
  );
}
