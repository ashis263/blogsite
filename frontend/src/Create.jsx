import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [userId, setuserId] = useState([]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user-info")).id;
    if (userId) {
      setuserId(userId);
    }
  }, []);

  

  const submitForm = () => {
    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("user_id", userId);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/create", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        navigate("/dashboard");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3" align="center">
        <br/>
        <h1>Create New Blog</h1>
        <br/>
        <input onChange={(event) => setTitle(event.target.value)} type="text" className="form-control" placeholder="Enter Blog Title"/>
        <br/>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          className="form-control" placeholder="Enter Blog Content"
        />
        <br/>
        <input onClick={submitForm} type="submit" className="btn btn-primary"/>
      </div>
    </div>
  );
}
