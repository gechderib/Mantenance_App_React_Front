import "./FormWrap.css"

function FormWrap(props){
    return<div className="formLayout">
        {props.children}
    </div>
}

export default FormWrap;