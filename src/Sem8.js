import React from 'react';
import "./App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactDOM } from 'react';
const Sem8= ()=> {
  return (
    <div className="sem8">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem8/Advtech" className="butto">
     <div class="p-3 border bg-light">Advanced Display Technologies & Systems</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem8/Disaster" className="butto">
     <div class="p-3 border bg-light">Disaster Preparedness & Management</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem8/Fertilizer" className="butto">
     <div class="p-3 border bg-light">Fertilizer Technology</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem8/Fluid" className="butto">
     <div class="p-3 border bg-light">Fluidization Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem8/Speech" className="butto">
     <div class="p-3 border bg-light">Speech Processing</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem8/Thermoturbo" className="butto">
     <div class="p-3 border bg-light">Thermal Turbo Machine</div>
    </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem8;
