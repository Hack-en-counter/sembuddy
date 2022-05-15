import React from 'react';
import "../App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactDOM } from 'react';
const Sem6= ()=> {
  return (
    <div className="sem6">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem6/Bigdata" className="butto">
     <div class="p-3 border bg-light">Big Data</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem6/Cnetwork" className="butto">
     <div class="p-3 border bg-light">Computer Networks</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem6/Dac" className="butto">
     <div class="p-3 border bg-light">Data Compression</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem6/Masstrans2" className="butto">
     <div class="p-3 border bg-light">Mass Transfer II</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem6/Se" className="butto">
     <div class="p-3 border bg-light">Software Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem6/Tomachine" className="butto">
     <div class="p-3 border bg-light">Theory of Machine</div>
    </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem6;
