import { useRef, useState } from "react";
import AmCalander from "../amharicCalander/AmCalander";
import SolutionWrap from "../ui/SolutionWrap";


function Solution(props) {
  var problems = JSON.parse(localStorage.getItem("problemDetail"));

    var [isFixed,setIsFixed] = useState("")
    var model = useRef()
    var brand = useRef()
    var problemFaced = useRef()
    var solution = useRef()
    var startTime = useRef()
    var endTime = useRef()
    var reasonNotFixed = useRef()
    var coordinator = useRef()

    function handleSolution(e){
        e.preventDefault()
        var problems = JSON.parse(localStorage.getItem("problemDetail"));
        var enteredModel = model.current.value;
        var enteredBrand = brand.current.value;
        var enteredProblemFaced = problemFaced.current.value
        var enteredSolution = solution.current.value
        var enteredStartTime = startTime.current.value
        var enteredEndTime = endTime.current.value
        var enteredReasonNotFixed = reasonNotFixed.current.value
        var enteredIsFixed = isFixed
        var enteredCoordinator = coordinator.current.value
        var solnINfo = {
            brand:enteredBrand,
            model:enteredModel,
            problemFaced:enteredProblemFaced,
            problemSoln:enteredSolution,
            timeStarted:enteredStartTime,
            timeEnded:enteredEndTime,
            isFixed:enteredIsFixed,
            problemDescription:enteredReasonNotFixed,
            coordinator:enteredCoordinator,
            rate:"",
            ratedBy:problems.sysUsername,
            questionOwnerId:problems.postedBy
             
        }
        console.log(solnINfo)
        props.onAddSolution(solnINfo)
    }
  return (
    <SolutionWrap>
      <form onSubmit={handleSolution}>
        <div className ="form-row">
          <div className ="form-group col-md-6">
            <label forHtml="model">Model</label>
            <input
              type="text"
              className ="form-control"
              id="model"
              placeholder="Model"
              ref={model}
            />
          </div>
          <div className ="form-group col-md-6">
            <label forHtml="brand">Brand</label>
            <input
              type="text"
              className ="form-control"
              id="brand"
              placeholder="brand"
              ref={brand}
            />
          </div>
        </div>
        <div className ="form-group">
          <label forHtml="problemFaced">ያጋጠመዉ ችግር</label>
          <textarea
            className ="form-control"
            id="problemFaced"
            placeholder="ስላጋጠመዉ ችግር ያብራሩ"
            rows={3}
            required
            ref={problemFaced}
          ></textarea>
        </div>
        <div className ="form-group">
          <label forHtml="solution">መፍትሄ</label>
          <textarea
            className ="form-control"
            id="solution"
            placeholder="መፍትሄ ያብራሩ"
            rows={3}
            required
            ref={solution}
          ></textarea>
        </div>
        <div className ="form-row">
          <div className ="form-group col-md-6">
            <label forHtml="startTime">የ ተጀመርበት ሰአት</label>
            <AmCalander  className1="form-control" placeholder1="ሰዓት" reference={startTime} />
          </div>
          <div className ="form-group col-md-6">
            <label forHtml="endTime">የ ተጠናቀቀበት ሰአት</label>
            <AmCalander  className1="form-control" placeholder1="ሰዓት" reference={endTime} />
          </div>
        </div>
        <div className ="form-row">
          <p className ="mr-3">ብልሽት ያጋጠመዉ እቃ ተጠግኗል?</p>
          <div className ="form-check mr-3">
            <input
              className ="form-check-input"
              type="radio"
              name="fixed"
              id="yes"
              value="አወ"
              onClick={(e)=>setIsFixed("አወ")}
            />
            <label className ="form-check-label" forHtml="fixed">
              አወ
            </label>
          </div>
          <div className ="form-check mr-3">
            <input
              className ="form-check-input"
              type="radio"
              name="fixed"
              id="half"
              value="በከፊል"
              onClick={(e)=>setIsFixed("በከፊል")}
            />
            <label className ="form-check-label" forHtml="fixed">
              በከፊል
            </label>
          </div>
          <div className ="form-check mr-3">
            <input
              className ="form-check-input"
              type="radio"
              name="fixed"
              id="no"
              value="አልተጠገነም"
              onClick={(e)=>setIsFixed("አልተጠገነም")}
            />
            <label className ="form-check-label" forHtml="fixed">
              አልተጠገነም
            </label>
          </div>
        </div>
        <div className ="form-group">
          <label for="reasonNotFixed">ያ ጋጠመዉ ችግር በከፊል ወይም ያልተጠገነበት ምክንያት</label>
          <textarea
            className ="form-control"
            id="reasonNotFixed"
            placeholder="ያ ጋጠመዉ ችግር በከፊል ወይም ያልተጠገነበት ምክንያት ያብራሩ ..."
            rows={3}
            required
            ref={reasonNotFixed}
          ></textarea>
        </div>
        <div className ="form-group col-md-12">
            <label forHtml="coord">Coordinator</label>
            <input
              type="text"
              className ="form-control"
              id="coord"
              placeholder="coordinator"
              ref={coordinator}
            />
          </div>
        <button type="submit" className ="btn btn-secondary">
          መፍትሄ ላክ
        </button>
      </form>
    </SolutionWrap>
  );
}

export default Solution;
