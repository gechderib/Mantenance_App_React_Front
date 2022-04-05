import "./CardWrap.css"

function CardWrap(props){
    return <div className="cardWWrap">
        {props.children}
    </div>
}

export default CardWrap