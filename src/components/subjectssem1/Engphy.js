import React from 'react'
import Footer from '../Footer.js';
import Navbar from '../Navbar';
import { useState , useEffect } from 'react';
import {db} from '../firebase_config'
import { collection , getDocs , addDoc , updateDoc, doc} from "firebase/firestore";
import { async } from '@firebase/util';
const Engphy = () => {
  const [sem1 , setSem1] = useState(null);
  const usersCollectionRef = collection(db , "semester1");
  useEffect(() => {

    const getSem1 = async () => {
      const data = await getDocs(usersCollectionRef);
      setSem1(data.docs.map((doc) => ({...doc.data() , id: doc.id })))
    };

    getSem1();
  } , []);
  return (
    <div className="sem">
      <Navbar/>
      <div data-aos="fade-up" data-aos-delay="150" class="aos-init aos-animate">
        <h1 id="ah">Engineering Physics</h1>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Papers</div>
          <div class="cell">Link</div>
        </div>
        {/* <div>{sem1 && JSON.stringify(sem1)}</div> */}
        {sem1 && sem1[0].papers.map((sem) => {
          return (
            
            <div class="r">
            <div class="cell">{sem.name}</div>
            <div class="cell">
              <a href={sem.url}>Download</a>
            </div>
          </div>
          );
        })}
        </div>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Guide</div>
          <div class="cell">Link</div>
        </div>
        {sem1 && sem1[0].guide.map((sem) => {
          return (
            <div class="r">
            <div class="cell">{sem.name}</div>
            <div class="cell">
              <a href={sem.url}>Download</a>
            </div>
            </div>
          );
        })}
        </div>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Books</div>
          <div class="cell">Link</div>
        </div>
        {sem1 && sem1[0].books.map((sem) => {
          return (
            <div class="r">
            <div class="cell">{sem.name}</div>
            <div class="cell">
              <a href={sem.url}>Download</a>
            </div>
            </div>
          );
        })}
        </div>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Notes</div>
          <div class="cell">Link</div>
        </div>
        {sem1 && sem1[0].notes.map((sem) => {
          return (
            <div class="r">
            <div class="cell">{sem.name}</div>
            <div class="cell">
              <a href={sem.url}>Download</a>
            </div>
            </div>
          );
        })}
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Engphy