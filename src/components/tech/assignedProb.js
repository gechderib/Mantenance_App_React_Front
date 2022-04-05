import axios from "axios";
import ProblemList from "../problems/problemlist";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AssignPageSide from "./assignedProbside";
import MainNav from "../layouts/mainNav";

function AssignProblem(props) {
  var user = JSON.parse(localStorage.getItem("user"));
  var assignedList = user["propList"];
  var assList = [...new Set(assignedList)];

  var token = user["accessToken"];

  var [listOfProblem, setListOfProblem] = useState([]);

  var [isLoading, setIsLoading] = useState(true);

  async function getAssignedProblem() {
    if (assList.length === 0) {
      console.log("ppppppppppppppppppppp");
      setIsLoading(false);
      setListOfProblem([]);
    } else {
      console.log("kjfdkfjdk");
      for (let i = 0; i < assList.length; i++) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/tech/getProblemDetail/${assList[i]}`,
            {
              headers: { "x-access-token": `${token}` },
            }
          );
          const data = response.data;
          listOfProblem.push(data);
          if (listOfProblem.length === assList.length) {
            setIsLoading(false);
          }
        } catch (err) {
          console.log("problem happen");
          console.log(err);
        }
      }
      setListOfProblem(listOfProblem);
    }
  }

  useEffect(() => {
    getAssignedProblem();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <MainNav />
      <Row>
        <Col sm={12} lg={8} md={8}>
          {assList.length === 0 ? (
            <div className="m-4">
              <h2 className="text-success">
                እስካሁን የተመደበለወት ጥያቄ የለም <br /> እናመሰግናለን!!!..
              </h2>
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <ProblemList problemList={listOfProblem} />
          )}
        </Col>
        <Col sm={12} lg={4} md={4}>
          <AssignPageSide />
        </Col>
      </Row>
    </div>
  );
}

export default AssignProblem;

// const res = await axios.get(
//   "http://localhost:5000/api/tech/getAllProblems",
//   {
//     headers: { "x-access-token": `${token}` },
//   }
// );
// var probData = res.data
// console.log("the response is below")
// console.log(probData.length)
// for(let j = 0; j< probData.length; j++){
//   listOfallProb.push(probData[j]["_id"])

// }

// var listProb = [...new Set(listOfallProb)]
// setListOfAllProb(listProb)

// console.log(listOfallProb)
