import { useContext, useEffect } from "react";
import MainNav from "../components/layouts/mainNav";
import SolutionList from "../components/solution/solutionList";
import ProblemContext from "../store/problem_context";

function AllSolutionPage() {
  const probCtx = useContext(ProblemContext);
  console.log(probCtx.fetchedData);
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));
    var roles = user["roles"];
    for (let role in roles) {
      if (roles[role] === "ROLE_ADMIN" || roles[role] === "ROLE_TECH") {
        probCtx.getAllProblems(
          "http://localhost:5000/api/tech/getAllSolutions"
        );
      }
      if (roles[role] === "ROLE_USER") {
        console.log(roles[role]);
        console.log("lllllllllllllllllllllllll");
        probCtx.getAllProblems(
          "http://localhost:5000/api/user/getAskedquestions"
        );
        console.log(probCtx.fetchedData);
      }
    }
  }, []);

  if (probCtx.isLoading) {
    return       <div>
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
      May be no problem founds 
    </div>
  </div>;
  }

  return <div>
  <MainNav/>
  <SolutionList solnList={probCtx.fetchedData} />
  </div>
}

export default AllSolutionPage;
