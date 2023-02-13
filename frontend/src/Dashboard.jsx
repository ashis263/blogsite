import Header from "./Header";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [data, setdata] = useState([]);
  const [isPremium, setisPremium] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      setUser(userInfo);
      getData(userInfo.id);
      getPremiumOrNot(userInfo.id);
    }
  }, []);

  const getData = (id) => {
    var formdata = new FormData();
    formdata.append("id", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/dashboard", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setdata(() => result);
      })
      .catch((error) => console.log("error", error));
  };

  const getPremiumOrNot = (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:8000/api/premium/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setisPremium(result.isPremium);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div align="center">
      <Header />
      <br />
      <hr />
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h4>{isPremium ? "Premium User" : "Free User"}</h4>
      <br />
      <hr />
      <br />
      {data.map((blog, index) => (
        <div key={index}>
          <h1>Title: {blog.title}</h1>
          <h4>Content: {blog.description}</h4>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
