import ProblemDetail from "../components/problems/problemDetail";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import MainNav from "../components/layouts/mainNav";
const axios = require("axios");


function DetailPage(props) {
    const[isAssigning, setIsAssigning] = useState()
    const navigate = useNavigate()

  async function assignHandler(userEmail) {

    var user = JSON.parse(localStorage.getItem("user"));
    var token =  user["accessToken"];
    var problems = JSON.parse(localStorage.getItem("problemDetail"));

      try{
        const response = await axios.put(
            `http://localhost:5000/api/admin/asignTech/${problems._id}`,
            userEmail,
            {
              headers: {
                "x-access-token": `${token}`,
              },
            }
          );
          const data = response.data
          if(data){
              setIsAssigning(false)
              navigate('/admin')
          }
      }catch(err){
          console.log(err)
      }
  }

  return <div>
  <MainNav/>
  <ProblemDetail onAssign={assignHandler} />
  </div>
}

export default DetailPage;
