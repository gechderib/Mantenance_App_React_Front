import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MainNav from "../components/layouts/mainNav";
import ProbAddUser from "../components/problems/probAddUser";
import ProblemList from "../components/problems/problemlist";
import ProblemContext from "../store/problem_context";

function UserProblem(props) {
  const [display, setDisplay] = useState(true);
  const probCtx = useContext(ProblemContext);
  probCtx.getProbPostedByUser();

  if (probCtx.isLoading) {
    return (
      <div>
        {" "}
        <div class="d-flex align-items-center m-5">
          <strong>Loading...</strong>
          <div
            class="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
          <br />
        </div>
        <div className="m-5">
          May be you don't have andy question you asked...
        </div>
      </div>
    );
  }
  return (
    <div>
      <MainNav />
      <Row>
        <Col sm={12} lg={8} md={8}>
          {probCtx.fetchedProb.length == 0 ? (
            <div className="m-5">
              <h2 className="text-success">
                እስካሁን የጠየቁት ጥያቄ የለም ወይም አስወግደዉታል
                <br /> እናመሰግናለን!!!
              </h2>
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <ProblemList problemList={probCtx.fetchedProb} />
          )}
        </Col>
        <Col sm={12} lg={4} md={4}>
          <ProbAddUser />
        </Col>
      </Row>
    </div>
  );
}

export default UserProblem;
