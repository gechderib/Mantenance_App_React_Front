import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/auth/login";
import ProblemContext from "../store/problem_context";
import ProblemAddPage from "./probAddPage";


function LoginPage(props) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  function handleLogin(user) {
    fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        
        if(res.status === 200){
            const body = res.json()
            body.then((result)=>{
              localStorage.setItem("user",JSON.stringify(result))

              const roles = result.roles
              for(let role in roles){
                if(roles[role] === "ROLE_ADMIN"){
                  
                  navigate("/admin");
                }
                if(roles[role]  === "ROLE_TECH"){
                  navigate("/tech/assignedProblem")
                  

                }
                if(roles[role]  === "ROLE_USER"){
                  navigate("/user/addProblem")
                  
                }
              }
            })
            
        }  
        if (res.status === 400) {
            setMessage("Invalid email/password")
        
        }
        if (res.status === 401) {
          setMessage(`${user.email} doesn't exists`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return <Login onLogin={handleLogin} message={message} />;
}

export default LoginPage;
