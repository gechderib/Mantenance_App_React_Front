import "./ProbAddWrap.css"
function ProbAddWrap(props){
    return <div className="probWrap">
        <h2>የ ገጠመወን ችግር ያስገቡ</h2>
        {props.children}
    </div>
}

export default ProbAddWrap