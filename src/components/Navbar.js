import React, {useState} from "react";
import '../App.css';
const Navbar = () =>{
  const[show, setShow]= useState(false);
    return(
        <div className="navbar">
           <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">SemBuddy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNavDropdown" 
    aria-controls="navbarNavDropdown" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
      onClick={()=> setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Leaderboard">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/About">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Contribute">Contribute</a>
        </li>
        <div className="hh ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/Login" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/Register</a>
        </li>
        </div>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;