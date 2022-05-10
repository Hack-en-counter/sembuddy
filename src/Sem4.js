import React from 'react';
import "./App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactDOM } from 'react';
const Sem4= ()=> {
  return (
    <div className="sem4">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem4/Chemeng" className="butto">
     <div class="p-3 border bg-light">Chemical Engineering</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Math4" className="butto">
     <div class="p-3 border bg-light">Mathematics IV</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Mechop" className="butto">
     <div class="p-3 border bg-light">Mechanical Operations</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Micro" className="butto">
     <div class="p-3 border bg-light">Microprocessor</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Reacteng1" className="butto">
     <div class="p-3 border bg-light">Reaction Engineering I</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Tafl" className="butto">
     <div class="p-3 border bg-light">Theory of Automata and Formal Languages</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Techcom" className="butto">
     <div class="p-3 border bg-light">Technical Communication</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem4/Uhuman" className="butto">
     <div class="p-3 border bg-light">Universal Human Values</div>
    </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem4;
