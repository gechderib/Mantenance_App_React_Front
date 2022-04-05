import axios from "axios";
import { Col, Row } from "react-bootstrap";
import ProblemAdd from "../components/problems/probAdd";
import ProbAddUser from "../components/problems/probAddUser";
import {useState} from "react"
import MainNav from "../components/layouts/mainNav";
import { useNavigate } from "react-router-dom";


function ProblemAddPage(props) {
  const [adding, setAdding] = useState(false)
  const navigate = useNavigate()

  async function probAddHandler(probInfo) {
    setAdding(true)
    var user = JSON.parse(localStorage.getItem("user"));
    var token = user["accessToken"];
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/proplems",
        probInfo,
        {
          headers: {
            "x-access-token": `${token}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        setAdding(false)
        navigate("/user/problems")
      }
    } catch (err) {
      console.log("jjjjjjjjjjjjjj");
      console.log(err);
    }
  }
  if(adding){
    return       <div>
    {" "}
    <div class="d-flex align-items-center m-5">
      <strong>send ing Your problem...</strong>
      <div
        class="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
      <br />
    </div>
    <div className="m-5">
      you are uploading your problem wait a second....
    </div>
  </div>
  }
  return (
    <div>
      <MainNav/>
      <Row>
        <Col sm={12} lg={8} md={8}>
          <ProblemAdd onAddProblem={probAddHandler} />;
        </Col>
        <Col sm={12} lg={4} md={4}>
          <ProbAddUser/>
        </Col>
      </Row>
    </div>
  );
}

export default ProblemAddPage;
