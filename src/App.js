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
import Leaderboard from "./Leaderboard";
import About from "./About";
import Faq from "./Faq";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
