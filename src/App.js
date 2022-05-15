import React, { useEffect } from "react";
import './App.css';
import Footer from './components/Footer.js';
import Cards from './components/Cards.js';
import Navbar from './components/Navbar';
import Contribute from './components/Contribute';
import Home from './components/Home';
import Sem1 from "./components/Sem1";
import Sem2 from "./components/Sem2";
import Sem3 from "./components/Sem3";
import Sem4 from "./components/Sem4";
import Sem5 from "./components/Sem5";
import Sem6 from "./components/Sem6";
import Sem7 from "./components/Sem7";
import Sem8 from "./components/Sem8";
import Engphy from "./components/subjectssem1/Engphy";
import Engchem from "./components/subjectssem1/Engchem";
import Engmath1 from "./components/subjectssem1/Engmath1";
import Engbee from "./components/subjectssem1/Engbee";
import Ai from "./components/subjectssem1/Ai";
import Emergtech from "./components/subjectssem1/Emergtech";
import Softs1 from "./components/subjectssem1/Softs1";
import Workshop from "./components/subjectssem1/Workshop";
import Program from "./components/subjectssem1/Program";
import Electronice from "./components/subjectssem1/Electronice";
import Engmech from "./components/subjectssem1/Engmech";

import Engphy2 from "./components/subjectssem2/Engphy";
import Engchem2 from "./components/subjectssem2/Engchem";
import Engmath2 from "./components/subjectssem2/Engmath2";
import Engbee2 from "./components/subjectssem2/Engbee";
import Ai2 from "./components/subjectssem2/Ai";
import Emergtech2 from "./components/subjectssem2/Emergtech";
import Softs2 from "./components/subjectssem2/Softs2";
import Workshop2 from "./components/subjectssem2/Workshop";
import Program2 from "./components/subjectssem2/Program";
import Electronice2 from "./components/subjectssem2/Electronice";
import Engmech2 from "./components/subjectssem2/Engmech";
import Leaderboard from "./components/Leaderboard";
import About from "./components/About";
import Faq from "./components/Faq";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Digisys from "./components/subjectssem3/Digisys";
import Discrete from "./components/subjectssem3/Discrete";
import Energy from "./components/subjectssem3/Energy";
import DataS from "./components/subjectssem3/DataS";
import Fluid from "./components/subjectssem3/Fluid";
import Instru from "./components/subjectssem3/Instru";
import Material from "./components/subjectssem3/Material";
import Techcom from "./components/subjectssem3/Techcom";
import Uhuman from "./components/subjectssem3/Uhuman";
import Chemeng from "./components/subjectssem4/Chemeng";
import Math4 from "./components/subjectssem4/Math4";
import Mechop from "./components/subjectssem4/Mechop";
import Micro from "./components/subjectssem4/Micro";
import Reacteng1 from "./components/subjectssem4/Reacteng1";
import Tafl from "./components/subjectssem4/Tafl";
import Uhuman2 from "./components/subjectssem4/Uhuman";
import Login from "./components/Login";
import Register from "./components/Register";
import Elecmech2 from "./components/subjectssem5/Elecmech2";
import Ml from "./components/subjectssem5/Ml";
import Compiler from "./components/subjectssem5/Compiler";
import Concrete from "./components/subjectssem5/Concrete";
import Dbms from "./components/subjectssem5/Dbms";
import Masstrans from "./components/subjectssem5/Masstrans";
import Cnetwork from "./components/subjectssem6/Cnetwork";
import Bigdata from "./components/subjectssem6/Bigdata";
import Dac from "./components/subjectssem6/Dac";
import Masstrans2 from "./components/subjectssem6/Masstrans2";
import Se from "./components/subjectssem6/Se";
import Tomachine from "./components/subjectssem6/Tomachine";

import Ai3 from "./components/subjectssem7/Ai";
import Autoeng from "./components/subjectssem7/Autoeng";
import DistriSys from "./components/subjectssem7/DistriSys";
import Processmodel from "./components/subjectssem7/Processmodel";
import Qualitym from "./components/subjectssem7/Qualitym";
import Vlsi from "./components/subjectssem7/Vlsi";

import Advtech from "./components/subjectssem8/Advtech";
import Disaster from "./components/subjectssem8/Disaster";
import Fertilizer from "./components/subjectssem8/Fertilizer";
import Fluid2 from "./components/subjectssem8/Fluid";
import Speech from "./components/subjectssem8/Speech";
import Thermoturbo from "./components/subjectssem8/Thermoturbo";
import PrivateRoute from "./PrivateRoute";
import {useLocalState} from "./util/useLocalStorage";
function App() {
  const [jwt, setJwt]=useLocalState("","jwt");
  useEffect(()=>{
    console.log(`JWT is: ${jwt}`);
  },[jwt]);
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
            <Route path="/subjectssem4/Uhuman" element={<Uhuman2/>}/>

            <Route path="/subjectssem5/Compiler" element={<Compiler/>}/>
            <Route path="/subjectssem5/Concrete" element={<Concrete/>}/>
            <Route path="/subjectssem5/Dbms" element={<Dbms/>}/>
            <Route path="/subjectssem5/Elecmech2" element={<Elecmech2/>}/>
            <Route path="/subjectssem5/Masstrans" element={<Masstrans/>}/>
            <Route path="/subjectssem5/Ml" element={<Ml/>}/>

            <Route path="/subjectssem6/Bigdata" element={<Bigdata/>}/>
            <Route path="/subjectssem6/Cnetwork" element={<Cnetwork/>}/>
            <Route path="/subjectssem6/Dac" element={<Dac/>}/>
            <Route path="/subjectssem6/Masstrans2" element={<Masstrans2/>}/>
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

            <Route path="/Contribute" element={
              <PrivateRoute>
                 <Contribute/>
              </PrivateRoute>
            }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
