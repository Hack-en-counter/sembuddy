import React from 'react';
import "../App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { ReactDOM } from 'react';
const Sem5= ()=> {
  return (
    <div className="sem5">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    <div class="row gx-6">
    <a href="/subjectssem5/Compiler" className="butto">
     <div class="p-3 border bg-light">Compiler Design</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem5/Concrete" className="butto">
     <div class="p-3 border bg-light">Concrete Technology</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem5/Dbms" className="butto">
     <div class="p-3 border bg-light">Database Management Systems</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem5/Elecmech2" className="butto">
     <div class="p-3 border bg-light">Electrical Mechanics II</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem5/Masstrans" className="butto">
     <div class="p-3 border bg-light">Heat & Mass Transfer</div>
    </a>
    </div>
    <div class="row gx-6">
    <a href="/subjectssem5/Ml" className="butto">
     <div class="p-3 border bg-light">Machine Learning</div>
    </a>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem5;
