import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  function menuFun() {
    let menuBtn = document.querySelector(".MenuBtn");
    let Navbar = document.querySelector(".nav-link");
    menuBtn.style = "display:none;";
    Navbar.style = "display: flex;";
  }
  function closefun() {
    if (window.innerWidth <= 600) {
      let MenuBtn = document.querySelector(".MenuBtn");
      let Navbar = document.querySelector(".nav-link");
      MenuBtn.style = "display:block;";
      Navbar.style = "display:none;";
    }
  }
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">Arpit Agrahari</Link>
        </div>
        <div className="nav-link">
          <div className="BtnDiv">
            <CloseIcon onClick={closefun} className="CloseBtn" />
          </div>
          <Link onClick={closefun}  to="/home">Home</Link>
          <Link onClick={closefun}  to="/projects">Projects</Link>
          <Link onClick={closefun} to="/cerrtificates">Certificates</Link>
          <Link onClick={closefun} to="/contact">Contact</Link>
        </div>
        <div className="BtnDiv">
          <MenuIcon onClick={menuFun} className="MenuBtn" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
