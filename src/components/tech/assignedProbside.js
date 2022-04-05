import ProfileEdit from "../profile/usersProfile";
import "./AssignedProbside.css"
function AssignPageSide(props) {
    var user = JSON.parse(localStorage.getItem("user"));
    var fullName =  user["fullname"]
  return (
    <div className="assignside">
      <div className="jumbotron">
        <h1 className="display-6">{fullName}</h1>
        <div className="lead">
          <ProfileEdit/>
        </div>
        <hr className="my-4" />

        <p className="lead">
          <a href="/solutions" className="btn btn-secondary btn-sm" role="button" >ምፍትሄ ያገኙ ችግሮችን ይመልከቱ</a>
        </p>Getachew
      </div>
    </div>
  );
}

export default AssignPageSide;
