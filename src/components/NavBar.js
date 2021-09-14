import React from "react";

const NavBar = (props) => {
  return (
    <header id="header" class="fixed-top d-flex align-items-center"  style={{ backgroundColor: "#1E2A83" }}>
    <div class="container d-flex justify-content-between">

      <div class="logo">
        <h1><a>TMS</a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
};

export default NavBar;
