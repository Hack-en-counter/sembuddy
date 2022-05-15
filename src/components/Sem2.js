import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../App.css";
import { ReactDOM } from 'react';
const Sem2= ()=> {
  return (
    <div className="sem2">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem2/Engphy" className="butto">
     <div class="p-3 border bg-light">Engineering Physics</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Engchem" className="butto">
     <div class="p-3 border bg-light">Engineering Chemistry</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Engmath2" className="butto">
     <div class="p-3 border bg-light">Engineering Mathematics-II</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Engbee" className="butto">
     <div class="p-3 border bg-light">Basic Electrical Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Electronice" className="butto">
     <div class="p-3 border bg-light">Emerging Domain in Electronics
Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Program" className="butto">
     <div class="p-3 border bg-light">Programming for Problem Solving</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Engmech" className="butto">
     <div class="p-3 border bg-light">Fundamentals of Mechanical
Engineering & Mechatronics</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Ai" className="butto">
     <div class="p-3 border bg-light">AI For Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Emergtech" className="butto">
     <div class="p-3 border bg-light">Emerging Technology for
Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Softs2" className="butto">
     <div class="p-3 border bg-light">Soft Skill II</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem2/Workshop" className="butto">
     <div class="p-3 border bg-light">Mechanical Workshop Lab</div>
     </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem2;
