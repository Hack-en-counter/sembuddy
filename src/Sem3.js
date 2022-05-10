import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./App.css";
import { ReactDOM } from 'react';
const Sem3= ()=> {
  return (
    <div className="sem3">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem3/DataS" className="butto">
     <div class="p-3 border bg-light">Data Structures</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Digisys" className="butto">
     <div class="p-3 border bg-light">Digital Systems</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Discrete" className="butto">
     <div class="p-3 border bg-light">Discrete & Theory of Logic</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Energy" className="butto">
     <div class="p-3 border bg-light">Material & Energy Balance</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Fluid" className="butto">
     <div class="p-3 border bg-light">Fluid Mechanics</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Instru" className="butto">
     <div class="p-3 border bg-light">Electrical Measurement & Instrumentation</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Material" className="butto">
     <div class="p-3 border bg-light">Materials Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Techcom" className="butto">
     <div class="p-3 border bg-light">Technical Communication</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem3/Uhuman" className="butto">
     <div class="p-3 border bg-light">Human Values</div>
    </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem3;
