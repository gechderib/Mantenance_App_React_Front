import { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import MainNav from "../components/layouts/mainNav";
import ProblemList from "../components/problems/problemlist";
import ProblemContext from "../store/problem_context";
import "./adminPage.css";
import AdminPageSide from "./adminPageSide";

function AdminPage(props) {
  const probCtx = useContext(ProblemContext);

  useEffect(() => {
    probCtx.getAllProblems("http://localhost:5000/api/admin/getAllProblems");
  }, []);

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
        <div className="m-5">May be their is no problem added yet</div>
      </div>
    );
  }

  return (
    <div>
      <MainNav />
      <Row>
        <Col sm={12} lg={8} md={8}>
          {probCtx.fetchedData.length == 0 ? (
            <div className="m-5">
              <h2 className="text-success">
                እስካሁን የጠየቁት የ ተጠቃሚ ጥያቄ የለም ወይም አስወግደዉታል <br /> እናመሰግናለን!!!..
              </h2>
              <div class="d-flex justify-content-center mt-5">
                <div class="spinner-border" role="status">
                  <span class="">እየጠበቀ...</span>
                </div>
              </div>
            </div>
          ) : (
            <ProblemList problemList={probCtx.fetchedData.reverse()} />
          )}
        </Col>
        <Col sm={12} lg={4} md={4}>
          <AdminPageSide />
        </Col>
      </Row>
    </div>
  );
}

export default AdminPage;
