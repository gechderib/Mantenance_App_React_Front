import "./AdminWrap.css"
function AdminWrap(props){
    return <div className="adminWrap">
        {props.children}
    </div>
}

export default AdminWrap