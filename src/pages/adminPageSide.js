import ProfileEdit from "../components/profile/usersProfile";
import "./adminPageside.css"
function AdminPageSide(props) {
    var user = JSON.parse(localStorage.getItem("user"));
    var fullName =  user["fullname"]
  return (
    <div className="adminside fixed">
      <div className="jumbotron">
        <h1 className="display-6">{fullName}</h1>
        <div className="lead">
          <ProfileEdit/>
        </div>
        <hr className="my-4" />

        <p className="lead">
          <a className="btn btn-secondary btn-sm mr-2" href="/admin/addUser" role="button">
            Add User
          </a>
          <a href="/solutions" className="btn btn-secondary btn-sm" role="button" >ምፍትሄ ያገኙ ችግሮችን ይመልከቱ</a>
        </p>
      </div>
    </div>
  );
}

export default AdminPageSide;
