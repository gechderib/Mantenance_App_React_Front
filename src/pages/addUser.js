import Register from "../components/auth/register";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainNav from "../components/layouts/mainNav";

const axios = require("axios");

function AddUser(props) {
  const [message1, setMessage] = useState("");
  const navigate = useNavigate();

 
  function userAddHandler(user) {
    console.log("user handler is classer")

    var userToken = JSON.parse(localStorage.getItem("user"));
    var token =  userToken["accessToken"];

    fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "x-access-token":`${token}`
      },
    })
      .then((res) => {
        console.log("lllllllllllllllllllllllllll")
        console.log(res.status)
        if (res.status === 200) {
          navigate("/admin");
        }
        if (res.status === 400) {
          setMessage(`${user.email} already exist`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <div>
    <MainNav/>
    <Register onAddUser={userAddHandler} message={message1} />;
  </div>
  
}

export default AddUser;
