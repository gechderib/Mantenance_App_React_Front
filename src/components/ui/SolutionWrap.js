import "./SolutionWrap.css"

function SolutionWrap(props){
    return <div className="solutionWrap">
        <h3>ለችግሩ መፍትሄ በሚከተለዉ ፎርም ላይ ያስገቡ</h3>
        {props.children}
    </div>
}

export default SolutionWrap