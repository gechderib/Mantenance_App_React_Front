import { useRef } from "react";
const axios = require("axios");

function ProfileEdit() {
  var user = JSON.parse(localStorage.getItem("user"));
  var fullName = user["fullname"];
  var userName = user["username"];
  var token = user["accessToken"];
  var id = user['id']

  var fullname = useRef();
  var username = useRef();

  async function updateHandler(e) {
    e.preventDefault();
    var enteredUsername = username.current.value;
    var enteredFullname = fullname.current.value;

    const userInfo = {
      fullname: fullName=="Fullname"? enteredFullname:fullName,
      username: userName=="username"? enteredUsername:userName,
    };
    console.log(userInfo);
    try {
      var response = await axios.put(
        `http://localhost:5000/api/user/updateProfile/${id}`,
        userInfo,
        {
          headers: {
            "x-access-token": `${token}`
          },
        }
      );
      var data = response.data;
      console.log(data)
      if (data) {
        console.log("updateed successfully");
      }
    } catch (err) {
        console.log('errrrrrrrrrrrrrrrrr')
      console.log(err);
    }
  }
  return (
    <div className="profileEdit">
      <form onSubmit={updateHandler}>
        <div class="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input
            ref={fullname}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={fullName}
            
            disabled={"Fullname" !== fullName}
          />
          <small id="emailHelp" class="form-text text-muted">
            Add your fullname to your profile
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input
            ref={username}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder={userName}
            disabled={"username" !== userName}
          />
        </div>
        <button style={{display:"username" !== userName && "Fullname" !== fullName? "none":""}} type="submit" class="btn btn-secondary">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
