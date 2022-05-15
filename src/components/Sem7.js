import React from 'react';
import "../App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactDOM } from 'react';
const Sem7= ()=> {
  return (
    <div className="sem7">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem7/Ai" className="butto">
     <div class="p-3 border bg-light">Artificial Intelligence</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem7/Autoeng" className="butto">
     <div class="p-3 border bg-light">Automobile Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem7/DistriSys" className="butto">
     <div class="p-3 border bg-light">Distributed System</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem7/Processmodel" className="butto">
     <div class="p-3 border bg-light">Process Modeling & Simulation</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem7/Qualitym" className="butto">
     <div class="p-3 border bg-light">Total Quality Management</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem7/Vlsi" className="butto">
     <div class="p-3 border bg-light">VLSI Design</div>
    </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem7;
