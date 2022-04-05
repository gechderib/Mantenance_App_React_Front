import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEdit from "../profile/usersProfile";

import "./problemAddForm.css"

function ProbAddUser(props) {
  const navigate = useNavigate();


  var user = JSON.parse(localStorage.getItem("user"));
  var email = user["email"];
  var fullName = user["fullname"];
  return (
    <div className="fixedUser">
      <div className="jumbotron" style={{ height: "100%" }}>
        <h2 className="display-5">{fullName}</h2>
        <p className="lead">
          
          <span>{email}</span>
        </p>
        <hr className="my-4" />
        <div className="mb-3">
          <ProfileEdit/>
        </div>
        
        <a href="/solutions" className="btn btn-secondary btn-sm mb-3" role="button" >መፍትሄ ያገኙ ችግሮችን ይመልከቱ</a>
        <a href="/user/problems" className="btn btn-secondary btn-sm" role="button" >የጠየቁትን ችግሮች ይመልከቱ</a>
      </div>
    </div>
  );
}


export default ProbAddUser;
