import { Button, Col, Form, Row } from "react-bootstrap";
import DetailWrap from "../ui/DetailWrap";
import "./problemDetail.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function ProblemDetail(props) {
  const [techList, setTechList] = useState([]);
  const [email, setEmail] = useState("")

  var problems = JSON.parse(localStorage.getItem("problemDetail"));
  var user = JSON.parse(localStorage.getItem("user"));
  var token = user["accessToken"];

  function handleAssign() {

    const techInfo = {
      email: email,
    };

    props.onAssign(techInfo);
  }

  async function getAllTechToAssign() {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/getTechToAssign",
        {
          headers: { "x-access-token": `${token}` },
        }
      );
      const data = response.data;
      let techListNow = []
      if (data) {
        
        for (let i in data) {
          console.log(data[i]["roles"][0]["name"])
          if (data[i]["roles"][0]["name"] === "tech") {
            console.log(data);
            techListNow.push(data[i])
            
          }
        }
        setTechList(techListNow);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllTechToAssign();
  }, []);
  return (
    <DetailWrap>
      <div className="cont">
        <div className="jumbotron">
          <h3 className="display-6">
            {problems.sysUsername}, {problems.directorateWorkflowName}
          </h3>
          <p className="lead"></p>
          <div className="row mb-3">
            <div className="col">
              <span></span>
              {problems.workField}
            </div>
            <div className="col">
              <span></span>
              {problems.officeName}
            </div>
            <div className="col">
              <span>ቢሮ ቁጥር:</span>
              {problems.officeNumber}
            </div>
            <div className="col">
              <span>ችግሩ የተፈጠረበት ሰአት:</span>
              <br />
              {problems.time}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <span>የተመደበለት ባለሙያ ስም:</span>
              <br />
              {problems.assignedTech}
            </div>
            <div className="col">
              <span>ተጠቃሚዉ አካል ጉዳተግኛ ናቸዉ?</span>
              {problems.isUserDisabled}
            </div>
            <div className="col">
              <span>ጾታ:</span>
              {problems.sex}
            </div>{" "}
            <div className="col">
              <span>
                {problems.solved ? "it is solved" : "problem is not yet solved"}
              </span>
            </div>
          </div>

          <hr className="my-4" />
          <div className="row mb-3">
            <div className="col">
              {"ሪፖርት የተደረገ ችግር"}
              <span></span>
              <br />
              {problems.reportedProblem}
            </div>

            <div className="col">
              <div className="row">
                <div className="col">
                  {"የእቃዉ አይነት"}
                  <ul>
                    {problems.itemType.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
                <div className="col">
                  {"የሲስተም አይነት"}
                  <ul>
                    {problems.sysType.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <Form>
                {/* <Form.Group className="mb-3 " controlId="role">
                  <Form.Label>በለሙያ መድብ </Form.Label>
                  <Form.Control
                    disabled={problems.solved}
                    ref={email}
                  ></Form.Control>
                </Form.Group> */}
                <Form.Select aria-label="Default select example" onChange={(e)=>setEmail(e.target.value)}>
                  {techList.map((tech) => (
                    <option 
                    value={tech.email}
                    disabled={problems.solved}
                    >{tech.fullname}</option>
                  ))}
                </Form.Select>
                <Button className="btn1 mt-3" onClick={handleAssign}>
                  ባለሙያዉን ያሳዉቁ
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Row className="mb-3">
        <Col></Col>
      </Row>
    </DetailWrap>
  );
}

export default ProblemDetail;
