import "./DetailWrap.css"
function DetailWrap(props){
    return <div className="detailWrap">
        {props.children}
    </div>
}

export default DetailWrap;