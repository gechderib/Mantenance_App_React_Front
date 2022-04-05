import { Button } from "react-bootstrap";
import HomeLayout from "../components/layouts/home.layout";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import MainNav from "../components/layouts/mainNav";

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <div className="mb-5">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <img alt="logo" />
          <a className="navbar-brand" href="/">
            የ ፍትህ ሚኒስተር
          </a>
        </nav>
      </div>
      <h1 className="welcome">እንኳን ድህና መጡ...</h1>
      <p className="description">
      እንኳን ወደ ኢንፎርሜሽን ቴክኖሎጂ ዳይሬክቶሬት የድጋፍ መጠየቂያ ገፅ በሰላም መጡ የሚፈልጉትን የድጋፍ አገልግሎት ለመጠየቅ የተጠቃሚ ስምዎን እና የይለፍ ቃልዎን ያስገቡ
      </p>
      <Link to={"/login"}>
        <Button
          variant="secondary"
          className="btnLogin"
          onClick={navigate("/login", { replace: true })}
        >
          ይግቡ
        </Button>
      </Link>
    </HomeLayout>
  );
}

export default HomePage;
