import React from "react";
import {Route, Link} from "react-router-dom";
import Sem1 from "./Sem1";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Pic1 from "./images/pexels-pixabay-261909.jpg";
import Pic2 from "./images/pexels-lilartsy-1925536 (1).jpg";
import Pic3 from "./images/pexels-olia-danilevich-5088008.jpg";


const Cards = () =>{
    return(
        <div className="card1">
          <table>
<tr>
<td>
<div className="card">
  <img src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/Planning%20your%20studies.jpg?h=140710cd&itok=EDqz50YE" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 1</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem1" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
<td>
<div className="card">
  <img src="https://wallpaperaccess.com/full/4521334.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">Semester 2</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem2" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
<td>
<div className="card">
  <img src={Pic1} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 3</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem3" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
</tr>
<tr>
<td>
<div className="card">
  <img src={Pic2} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 4</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem4" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
<td>
<div className="card">
  <img src={Pic3} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 5</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem5" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
<td>
<div className="card">
  <img src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/Planning%20your%20studies.jpg?h=140710cd&itok=EDqz50YE" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 6</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem6" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
</tr>
<tr>
<td>
<div className="card">
  <img src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/Planning%20your%20studies.jpg?h=140710cd&itok=EDqz50YE" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 7</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem7" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
<td>
<div className="card">
  <img src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/Planning%20your%20studies.jpg?h=140710cd&itok=EDqz50YE" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Semester 8</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Sem8" className="btn btn-primary">Click here</a>
  </div>
</div>
</td>
</tr> 
</table>
        </div>
    );
};

export default Cards; 