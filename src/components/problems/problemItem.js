import { Button, Card } from "react-bootstrap";
import CardWrap from "../ui/CardWrap";
import "./problemitem.css"
import {useContext, useState} from 'react'
import ProblemContext from "../../store/problem_context";
import { useNavigate } from "react-router-dom";


function ProblemItem(props) {

  const navigate = useNavigate()
  const detailCtx = useContext(ProblemContext)

  
  function HandleDelete(){
    detailCtx.deleteOneProblem(props.id)
    window.location.reload()
  }

  function handleDetail(){
    var user = JSON.parse(localStorage.getItem("user"));
    var roles =  user["roles"];
    for(let i in roles){
      if(roles[i] == 'ROLE_ADMIN'){
        detailCtx.getOneProblem(props.id,"admin")
        navigate("/problem/detail")
      }
      if(roles[i]==='ROLE_TECH'){
        detailCtx.getOneProblem(props.id,"tech")
        navigate("/problem/solution")
        console.log(props.id)
      }
    } 
  }


  return (
    <CardWrap>
      <Card.Body >
        <Card.Title className="title"> {props.workField}</Card.Title>
        <Card.Text className="textStyle">
          <p>
          {props.reportedProblem}
          </p>
          <p>
              Assigned Tech: {props.assignedTech}
          </p>
          <p>
            {props.solved?"solved":"not solved"}
          </p>
        </Card.Text>
        <Button onClick={handleDetail} variant="secondary" style={{display:props.onDisplayDetail()?"none":""}}>Detail</Button>
        <Button onClick={HandleDelete} variant="danger" style={{float:"right",display:props.onDisplayDelete()?"none":""}}>Delete</Button>
      </Card.Body>
    </CardWrap>
  );
}

export default ProblemItem;
