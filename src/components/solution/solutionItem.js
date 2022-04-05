import { Button } from "react-bootstrap";
import "./solutionItem.css";
import ProblemContext from "../../store/problem_context";
import { useContext, useRef, useState } from "react";
const axios = require("axios");

function SolutionItem(props) {
  var user = JSON.parse(localStorage.getItem("user"));
  var token = user["accessToken"];
  var userId = user["id"];

  const detailCtx = useContext(ProblemContext);
  var [rate1, setRate] = useState("");
  var [isDisable, setDisable] = useState(false);
  var [solver, setSolver] = useState("jjj")
  var rate = useRef();

  async function getSolver(){

    try{

      const response = await axios.get(
        `http://localhost:5000/api/user/getUserById/${props.solvedBy}`,
        { headers: { "x-access-token": `${token}` } }
      );
      const data = response.data;
      console.log(data.fullname)
      if(data){
        console.log(data)
        setSolver(data.fullname)
      }
    }catch(err){
      
      console.log(err)
    }
  }

  async function handleGetSoln() {
    detailCtx.getOneSolution(props.id);
    var soln = JSON.parse(localStorage.getItem("solutionDetail"));
    var questionOwnerId = soln.questionOwnerId;

    if (questionOwnerId != userId) {
      setDisable(true);
    }
  }

  async function handleRate() {
    var soln = JSON.parse(localStorage.getItem("solutionDetail"));
    var id = soln._id;
    var enteredRate = rate.current.value;
    setRate(enteredRate);

    rate = {
      rate: enteredRate,
    };

    const response = await axios.put(
      `http://localhost:5000/api/user/rateTech/${id}`,
      rate,
      {
        headers: {
          "x-access-token": `${token}`,
        },
      }
    );
    const data = response.data;
    if (data) {
      console.log("it is successfully updated");
    }
  }

  getSolver()
  return (
    <div className="cont" onMouseEnter={handleGetSoln}>
      <div className="jumbotron">
        <h2 className="display-5">
          
          Model: {props.model}, Brand:{props.brand}
        </h2>
        <p className="lead"></p>
        <div className="row mb-3">
          <div className="col">
            <span>የተጀመረበት ሰአት:</span>
            {props.startTime}
          </div>
          <div className="col">
            <span>የተጠናቀቀበት ሰአት:</span>
            {props.endTime}
          </div>
          <div className="col">
            <span>ተጠግኗል:</span> {props.isFixed}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <span>ያጋጠመው ችግር</span>
            <br /> {props.problemFaced}
          </div>
          <div className="col">
            <span>መፍትሄ</span>
            <br />
            {props.solution}
          </div>
          <div className="col">
            <span> ያልተጠገነበት ምክንያት</span>
            <br />
            {props.reasonNotFixed}
          </div>
        </div>

        <hr className="my-4" />
        <div className="row mb-3">
          <div className="col">
            <span>እርካታዉን የገለጸው ደንበኛ ስም </span>
            <br />
            {props.ratedBy}
          </div>
          <div className="col">
            <h6 className="mb-3">
              <span>ያርካታው መጠን:{props.rate} %</span>
            </h6>
            <button className="btn bg-warning">
              <input
                title="your rate"
                onClick={handleRate}
                type="range"
                class="form-range"
                step={0.1}
                id="customRange1"
                ref={rate}
                disabled={isDisable}
              />
              your rate {rate1}%
            </button>
          </div>
          <div className="col">
          መፍትሄዉን የሰጠዉ ባለሙያ ስም <br/>
          {solver}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionItem;
