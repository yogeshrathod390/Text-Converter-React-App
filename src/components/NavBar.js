import React from "react";
// import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="">
            {props.title}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link  className="nav-link active"  to="/">
                  {props.home}
                </Link> */}
                <a  className="nav-link active"  href="">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  {props.about}
                </Link> */}
              
              </li>

              <li className="nav-item"></li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
