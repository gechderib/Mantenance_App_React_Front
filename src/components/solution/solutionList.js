import SolutionItem from "./solutionItem"

function SolutionList(props){


    return <div>
        {
            props.solnList.map(solnItem=>{
                return <SolutionItem
                key={solnItem._id}
                id={solnItem._id}
                model={solnItem.model}
                brand={solnItem.brand}
                isFixed={solnItem.isFixed}
                problemFaced = {solnItem.problemFaced}
                solution={solnItem.problemSoln}
                startTime={solnItem.timeStarted}
                endTime={solnItem.timeEnded}
                reasonNotFixed={solnItem.problemDescription}
                rate={solnItem.rate}
                ratedBy={solnItem.ratedBy}
                questionOwnerId={solnItem.questionOwnerId}
                solvedBy={solnItem.solvedBy}
                />
            })
        }
    </div>
}

export default SolutionList