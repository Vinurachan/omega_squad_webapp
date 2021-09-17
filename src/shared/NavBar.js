import React from "react";

const NavBar = (props) => {
  return (
    <header
      id="header"
      class="fixed-top d-flex align-items-center"
      style={{ backgroundColor: "#1E2A83" }}
    >
      <div class="logo" style={{ marginLeft: 30 }}>
        <a href="">
          <img src="Logo.png" alt="" class="img-fluid" />
        </a>
      </div>
      <div class="container d-flex justify-content-between">
        <div>
          <h1 style={{ color: "white" }}>TSS</h1>
        </div>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
