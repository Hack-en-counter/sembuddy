import React from "react";
import './App.css';
import Footer from './Footer.js';
import Cards from './Cards.js';
import Navbar from './Navbar';
import Home from './Home';
import Sem1 from "./Sem1";
import Sem2 from "./Sem2";
import Sem3 from "./Sem3";
import Sem4 from "./Sem4";
import Sem5 from "./Sem5";
import Sem6 from "./Sem6";
import Sem7 from "./Sem7";
import Sem8 from "./Sem8";
import Engphy from "./subjectssem1/Engphy";
import Engchem from "./subjectssem1/Engchem";
import Engmath1 from "./subjectssem1/Engmath1";
import Engbee from "./subjectssem1/Engbee";
import Ai from "./subjectssem1/Ai";
import Emergtech from "./subjectssem1/Emergtech";
import Softs1 from "./subjectssem1/Softs1";
import Workshop from "./subjectssem1/Workshop";
import Program from "./subjectssem1/Program";
import Electronice from "./subjectssem1/Electronice";
import Engmech from "./subjectssem1/Engmech";

import Engphy2 from "./subjectssem2/Engphy";
import Engchem2 from "./subjectssem2/Engchem";
import Engmath2 from "./subjectssem2/Engmath2";
import Engbee2 from "./subjectssem2/Engbee";
import Ai2 from "./subjectssem2/Ai";
import Emergtech2 from "./subjectssem2/Emergtech";
import Softs2 from "./subjectssem2/Softs2";
import Workshop2 from "./subjectssem2/Workshop";
import Program2 from "./subjectssem2/Program";
import Electronice2 from "./subjectssem2/Electronice";
import Engmech2 from "./subjectssem2/Engmech";
import Leaderboard from "./Leaderboard";
import About from "./About";
import Faq from "./Faq";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Digisys from "./subjectssem3/Digisys";
import Discrete from "./subjectssem3/Discrete";
import Energy from "./subjectssem3/Energy";
import DataS from "./subjectssem3/DataS";
import Fluid from "./subjectssem3/Fluid";
import Instru from "./subjectssem3/Instru";
import Material from "./subjectssem3/Material";
import Techcom from "./subjectssem3/Techcom";
import Uhuman from "./subjectssem3/Uhuman";
import Chemeng from "./subjectssem4/Chemeng";
import Math4 from "./subjectssem4/Math4";
import Mechop from "./subjectssem4/Mechop";
import Micro from "./subjectssem4/Micro";
import Reacteng1 from "./subjectssem4/Reacteng1";
import Tafl from "./subjectssem4/Tafl";
import Login from "./Login";
import Register from "./Register";
import Elecmech2 from "./subjectssem5/Elecmech2";
import Ml from "./subjectssem5/Ml";
import Compiler from "./subjectssem5/Compiler";
import Concrete from "./subjectssem5/Concrete";
import Dbms from "./subjectssem5/Dbms";
import Masstrans from "./subjectssem5/Masstrans";
import Cnetwork from "./subjectssem6/Cnetwork";
import Bigdata from "./subjectssem6/Bigdata";
import Dac from "./subjectssem6/Dac";
import Masstrans2 from "./subjectssem6/Masstrans2";
import Se from "./subjectssem6/Se";
import Tomachine from "./subjectssem6/Tomachine";

import Ai3 from "./subjectssem7/Ai";
import Autoeng from "./subjectssem7/Autoeng";
import DistriSys from "./subjectssem7/DistriSys";
import Processmodel from "./subjectssem7/Processmodel";
import Qualitym from "./subjectssem7/Qualitym";
import Vlsi from "./subjectssem7/Vlsi";

import Advtech from "./subjectssem8/Advtech";
import Disaster from "./subjectssem8/Disaster";
import Fertilizer from "./subjectssem8/Fertilizer";
import Fluid2 from "./subjectssem8/Fluid";
import Speech from "./subjectssem8/Speech";
import Thermoturbo from "./subjectssem8/Thermoturbo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Sem1" element={<Sem1/>} />
            <Route path="/Sem2" element={<Sem2/>} />
            <Route path="/Sem3" element={<Sem3/>} />
            <Route path="/Sem4" element={<Sem4/>} />
            <Route path="/Sem5" element={<Sem5/>} />
            <Route path="/Sem6" element={<Sem6/>} />
            <Route path="/Sem7" element={<Sem7/>} />
            <Route path="/Sem8" element={<Sem8/>} />
            <Route path="/subjectssem1/Engphy" element={<Engphy/>}/>
            <Route path="/subjectssem1/Engchem" element={<Engchem/>}/>
            <Route path="/subjectssem1/Engmath1" element={<Engmath1/>}/>
            <Route path="/subjectssem1/Engbee" element={<Engbee/>}/>
            <Route path="/subjectssem1/Electronice" element={<Electronice/>}/>
            <Route path="/subjectssem1/Program" element={<Program/>}/>
            <Route path="/subjectssem1/Engmech" element={<Engmech/>}/>
            <Route path="/subjectssem1/Emergtech" element={<Emergtech/>}/>
            <Route path="/subjectssem1/Softs1" element={<Softs1/>}/>
            <Route path="/subjectssem1/Workshop" element={<Workshop/>}/>
            <Route path="/subjectssem1/Ai" element={<Ai/>}/>
            <Route path="/Leaderboard" element={<Leaderboard/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Faq" element={<Faq/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            
            <Route path="/subjectssem2/Engphy" element={<Engphy2/>}/>
            <Route path="/subjectssem2/Engchem" element={<Engchem2/>}/>
            <Route path="/subjectssem2/Engmath2" element={<Engmath2/>}/>
            <Route path="/subjectssem2/Engbee" element={<Engbee2/>}/>
            <Route path="/subjectssem2/Electronice" element={<Electronice2/>}/>
            <Route path="/subjectssem2/Program" element={<Program2/>}/>
            <Route path="/subjectssem2/Engmech" element={<Engmech2/>}/>
            <Route path="/subjectssem2/Emergtech" element={<Emergtech2/>}/>
            <Route path="/subjectssem2/Softs2" element={<Softs2/>}/>
            <Route path="/subjectssem2/Workshop" element={<Workshop2/>}/>
            <Route path="/subjectssem2/Ai" element={<Ai2/>}/>
            
            <Route path="/subjectssem3/DataS" element={<DataS/>}/>
            <Route path="/subjectssem3/Digisys" element={<Digisys/>}/>
            <Route path="/subjectssem3/Discrete" element={<Discrete/>}/>
            <Route path="/subjectssem3/Energy" element={<Energy/>}/>
            <Route path="/subjectssem3/Fluid" element={<Fluid/>}/>
            <Route path="/subjectssem3/Instru" element={<Instru/>}/>
            <Route path="/subjectssem3/Material" element={<Material/>}/>
            <Route path="/subjectssem3/Techcom" element={<Techcom/>}/>
            <Route path="/subjectssem3/Uhuman" element={<Uhuman/>}/>

            <Route path="/subjectssem4/Chemeng" element={<Chemeng/>}/>
            <Route path="/subjectssem4/Math4" element={<Math4/>}/>
            <Route path="/subjectssem4/Mechop" element={<Mechop/>}/>
            <Route path="/subjectssem4/Micro" element={<Micro/>}/>
            <Route path="/subjectssem4/Reacteng1" element={<Reacteng1/>}/>
            <Route path="/subjectssem4/Tafl" element={<Tafl/>}/>
            <Route path="/subjectssem4/Techcom" element={<Techcom/>}/>
            <Route path="/subjectssem4/Uhumam" element={<Uhuman/>}/>

            <Route path="/subjectssem5/Compiler" element={<Compiler/>}/>
            <Route path="/subjectssem5/Concrete" element={<Concrete/>}/>
            <Route path="/subjectssem5/Dbms" element={<Dbms/>}/>
            <Route path="/subjectssem5/Elecmech2" element={<Elecmech2/>}/>
            <Route path="/subjectssem5/Masstrans" element={<Masstrans/>}/>
            <Route path="/subjectssem5/Ml" element={<Ml/>}/>

            <Route path="/subjectssem6/Bigdata" element={<Bigdata/>}/>
            <Route path="/subjectssem6/Cnetwork" element={<Cnetwork/>}/>
            <Route path="/subjectssem6/Dac" element={<Dac/>}/>
            <Route path="/subjectssem6/Masstrans" element={<Masstrans2/>}/>
            <Route path="/subjectssem6/Se" element={<Se/>}/>
            <Route path="/subjectssem6/Tomachine" element={<Tomachine/>}/>

            <Route path="/subjectssem7/Ai" element={<Ai3/>}/>
            <Route path="/subjectssem7/Autoeng" element={<Autoeng/>}/>
            <Route path="/subjectssem7/DistriSys" element={<DistriSys/>}/>
            <Route path="/subjectssem7/Processmodel" element={<Processmodel/>}/>
            <Route path="/subjectssem7/Qualitym" element={<Qualitym/>}/>
            <Route path="/subjectssem7/Vlsi" element={<Vlsi/>}/>

            <Route path="/subjectssem8/Advtech" element={<Advtech/>}/>
            <Route path="/subjectssem8/Disaster" element={<Disaster/>}/>
            <Route path="/subjectssem8/Fertilizer" element={<Fertilizer/>}/>
            <Route path="/subjectssem8/Fluid" element={<Fluid2/>}/>
            <Route path="/subjectssem8/Speech" element={<Speech/>}/>
            <Route path="/subjectssem8/Thermoturbo" element={<Thermoturbo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
