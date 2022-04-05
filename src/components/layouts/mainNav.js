import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./mainNav.css";
import { Link } from "react-router-dom";

function MainNav(props) {
    function handleLogout(){
        localStorage.clear()
    }
  return (
    <div className="mb-5" >
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <img alt="logo"/>
        <a className="navbar-brand" href="/">
        የ ፍትህ ሚኒስተር
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end"  id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/" onClick={handleLogout}>
              የመጀመሪያ ገጽ <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item ">
              <a className="nav-link" href="#">
              ያግኙን
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/login" onClick={handleLogout}> 
              ዉጣ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default MainNav;
