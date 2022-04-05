import "./home.layout.css"

function HomeLayout(props){
    return <div className="homeLayout">
        {props.children}
    </div>
}

export default HomeLayout;