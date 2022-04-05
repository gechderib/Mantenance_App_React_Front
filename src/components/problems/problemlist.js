import { Button } from "bootstrap";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import ProblemItem from "./problemItem";

function ProblemList(props) {
  const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false);
  const [displayDetailBtn, setDisplayDetailBtn] = useState(false);

  const [solved, setSolved] = useState(false);
  const [notSolved, setNotSolved] = useState(false);
  const [techNotAssigned, setTechNotAssigned] = useState(false);
  const [all, setAll] = useState(false)

  console.log(solved);
  console.log(notSolved);
  console.log(techNotAssigned);

  var user = JSON.parse(localStorage.getItem("user"));
  var roles = user["roles"];

  let solvedOrNot;

  function handleDisplayDelete() {
    for (let i in roles) {
      if (roles[i] === "ROLE_TECH") {
        setDisplayDeleteBtn(true);
      }
    }
    return displayDeleteBtn;
  }

  function handledisplayDetail() {
    for (let i in roles) {
      if (roles[i] === "ROLE_USER") {
        setDisplayDetailBtn(true);
      }
    }
    return displayDetailBtn;
  }

  return (
    <div className="mt-4">
      <Nav variant="tabs" defaultActiveKey="#">
        <Nav.Item>
          <Nav.Link href="#" onClick={() => {
             setSolved(false);
             setNotSolved(false)
             setTechNotAssigned(false);
             setAll(true)
          }}>
            ሁሉም{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="one"
            onClick={() => {
              setSolved(true);
              setNotSolved(false)
              setTechNotAssigned(false);
              setAll(false)
            }}
          >
            መፍትሄ ያገኙ ብቻ.
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="two"
            onClick={() => {
              setSolved(false);
              setNotSolved(true)
              setTechNotAssigned(false);
              setAll(false)
            }}
          >
            መፍትሄ ያላገኙ ብቻ
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{display: displayDeleteBtn?"none":""}}>
          <Nav.Link
            eventKey="three"
            onClick={() => {
              setSolved(false);
              setNotSolved(false)
              setTechNotAssigned(true);
              setAll(false)
            }}
          >
            ባለሙያ ያልተመደበላቸዉ
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div>
        {props.problemList.map((probItem) => {
          if(probItem.solved && solved){
            
            return (
              <ProblemItem 
                key={probItem._id}
                id={probItem._id}
                workField={probItem.workField}
                reportedProblem={probItem.reportedProblem}
                officeName={probItem.officeName}
                assignedTech={probItem.assignedTech}
                solved={probItem.solved}
                time={probItem.time}
                onDisplayDelete={handleDisplayDelete}
                onDisplayDetail={handledisplayDetail}
              />
            );
          }
          if(!probItem.solved && notSolved){
            return (
              <ProblemItem
                key={probItem._id}
                id={probItem._id}
                workField={probItem.workField}
                reportedProblem={probItem.reportedProblem}
                officeName={probItem.officeName}
                assignedTech={probItem.assignedTech}
                solved={probItem.solved}
                time={probItem.time}
                onDisplayDelete={handleDisplayDelete}
                onDisplayDetail={handledisplayDetail}
              />
            );
          }
          if(probItem.assignedTech === "not assign yet" && techNotAssigned){
            return (
              <ProblemItem
                key={probItem._id}
                id={probItem._id}
                workField={probItem.workField}
                reportedProblem={probItem.reportedProblem}
                officeName={probItem.officeName}
                assignedTech={probItem.assignedTech}
                solved={probItem.solved}
                time={probItem.time}
                onDisplayDelete={handleDisplayDelete}
                onDisplayDetail={handledisplayDetail}
              />
            );
          }
          if(all ){
            
            return (
              <ProblemItem
                key={probItem._id}
                id={probItem._id}
                workField={probItem.workField}
                reportedProblem={probItem.reportedProblem}
                officeName={probItem.officeName}
                assignedTech={probItem.assignedTech}
                solved={probItem.solved}
                time={probItem.time}
                onDisplayDelete={handleDisplayDelete}
                onDisplayDetail={handledisplayDetail}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProblemList;
