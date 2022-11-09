import React from "react";
import logo from "../public/imgs/lancoIcon.png";
function NavBar() {
  return (
    <React.Fragment>
      <head>
        <script
          src="https://kit.fontawesome.com/83ed3e2cc9.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/">
          <img
            src="https://seeklogo.com/images/L/lanco-logo-40EF02C4C4-seeklogo.com.png"
            width="150"
            height="70"
            class="d-inline-block align-top"
            alt=""
          ></img>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
            <li className="nav-item ">
              <a className="nav-link" href={"/productos"}>
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"http://google.com"}>
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/registros"}>
                Registos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href={"http:/.com"}>
                Empleados
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
