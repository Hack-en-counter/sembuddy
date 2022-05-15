import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../App.css";
import { ReactDOM } from 'react';
const Sem1= ()=> {
  return (
    <div className="sem1">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem1/Engphy" className="butto">
     <div class="p-3 border bg-light">Engineering Physics</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Engchem" className="butto">
     <div class="p-3 border bg-light">Engineering Chemistry</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Engmath1" className="butto">
     <div class="p-3 border bg-light">Engineering Mathematics-I</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Engbee" className="butto">
     <div class="p-3 border bg-light">Basic Electrical Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Electronice" className="butto">
     <div class="p-3 border bg-light">Emerging Domain in Electronics
Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Program" className="butto">
     <div class="p-3 border bg-light">Programming for Problem Solving</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Engmech" className="butto">
     <div class="p-3 border bg-light">Fundamentals of Mechanical
Engineering & Mechatronics</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Ai" className="butto">
     <div class="p-3 border bg-light">AI For Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Emergtech" className="butto">
     <div class="p-3 border bg-light">Emerging Technology for
Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Softs1" className="butto">
     <div class="p-3 border bg-light">Soft Skill I</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem1/Workshop" className="butto">
     <div class="p-3 border bg-light">Mechanical Workshop Lab</div>
     </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem1;
