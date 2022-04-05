import axios from "axios";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MainNav from "../components/layouts/mainNav";
import ProbDetail from "../components/tech/probDetail";
import Solution from "../components/tech/solutions";

function SolutionPage() {
    const [adding, setAdding] = useState(false)
    async function solutionAddHandler(solnINfo){
        
        var user = JSON.parse(localStorage.getItem("user"));
        var token =  user["accessToken"];

        var problems = JSON.parse(localStorage.getItem("problemDetail"));

        try{
            setAdding(true)
            const response = await axios.post("http://localhost:5000/api/tech/addSolution",solnINfo,{
                headers:{
                    'x-access-token':`${token}`
                }
            })
            const response1 = await axios.put(`http://localhost:5000/api/problem/solved/${problems._id}`,{solved:true},{
              headers:{
                'x-access-token':`${token}`
              }
            })
            var data = response.data
            var data1 = response1.data
            console.log(data)
            if(data){
                setAdding(false)
                console.log("successfuly added")
            }
            if(data1){
              
              console.log(problems._id)
              console.log("Your problem is solved")
            }
        }catch(err){
            console.log(err)
        }
    }
    
    if(adding){
        return       <div>
        {" "}
        <div class="d-flex align-items-center m-5">
          <strong>Adding...</strong>
          <div
            class="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
          <br />
        </div>
        <div className="m-5">
          adding your solution wait until upload it...
        </div>
      </div>
    }
  return (
    <div>
      <MainNav/>
      <Row>
        <Col sm={12} lg={4} md={4}>
          <ProbDetail />
        </Col>
        <Col sm={12} lg={8} md={8}>
          <Solution onAddSolution={solutionAddHandler} />
        </Col>
      </Row>
    </div>
  );
}

export default SolutionPage;
