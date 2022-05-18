import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../App.css";
import { ReactDOM } from 'react';
import { useState , useEffect } from 'react';
import {db} from './firebase_config'
import { collection , getDocs , addDoc , updateDoc, doc} from "firebase/firestore";
import { async } from '@firebase/util';
const Sem1= ()=> {
  const [sem1 , setSem1] = useState(null);
  const usersCollectionRef = collection(db , "semester1");
  useEffect(() => {

    const getSem1 = async () => {
      const data = await getDocs(usersCollectionRef);
      setSem1(data.docs.map((doc) => ({...doc.data() , id: doc.id })))
    };

    getSem1();
  } , []);

  const setUri = (str)=>{
    switch(str){
      case "Engineering Chemistry":
        return "Engchem"
      case "Basic Electrical Engineering":
        return "Engbee" 
      case "Softskill 1":
        return "Softs1" 
      case "Mechanical Workshop Lab":
        return "Workshop"
      case "Engineering Mathematics":
        return "Engmath1"
      case "Emerging Domain in Electronics Engineering":
        return "Electronice"
      case "Programming for Problem Solving":
        return "Program"
      case "Fundamental of Mechanical Engineering & Mechatronics":
        return "Engmech"
      case "AI for Engineering":
        return "Ai"
      case "Emerging Technology for Engineering":
        return "Emergtech"
      default:
        return "Engphy";
    }
  }

  return (
    <div className="sem1">
    <Navbar/>
    <div class="container1 px-4">
    <div class="col">
    {sem1 && sem1.map((sem) => {
      return (
        <div class="row gx-6">
        <a href={`/subjectssem1/${setUri(sem.name)}`} className="butto">
        <div class="p-3 border bg-light">{sem.name}</div>
        </a>
        </div>
      );
    })}
  </div>
</div>
     <Footer/>
    </div>
  );
};

export default Sem1;
