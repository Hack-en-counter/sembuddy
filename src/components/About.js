import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import pic from "./images/banner.png";
const About = () => {
  return (
    <div className="about">
       <Navbar/>
       <img src={pic} width="100%" height="400" alt="" loading="lazy"/>
  <h1>SemBuddy</h1>
  <h4 className="head"><i>"Education is the passport for Future, for tomorrow belongs to those who prepare for it today."</i></h4>
  <div className="con">
  <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
    <p class="font-italic">
      Welcome to SemBuddy - "Exculsively for Students : By Students"
    </p>
    <p class="font-italic">
      Platform where you are going to find every material related to your Semsters.
    </p>
    <ul class="no-bullets">
      <li> Papers for Midsems as well as Endsems.</li>
      <li> Books related to every Subject </li>
      <li>Important Notes of your Seniors </li>
      <li>Tutorial Sheets and Assignment Questions </li>
      <li>Lab Files and Manuals </li>
    </ul>
  </div>
</div>
  <h2>Our Team</h2>
<div class="row1">
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Shivangini Sahu"/>
      <div class="container3">
        <h5>Shivangini Sahu</h5>
        <p>BTech CSE 3rd year</p>
        <p>sahushivi5520@gmail.com</p>
      </div>
    </div>
  </div>

  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Akanksha Shukla"/>
      <div class="container3">
        <h5>Akanksha Shukla</h5>
        <p>BTech IT 3rd year</p>
        <p>akankshashukla06865@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Garima Singh"/>
      <div class="container3">
        <h5>Garima Singh</h5>
        <p>BTech CSE 3rd year</p>
        <p>garima0579@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Ayush Kumar Mishra"/>
      <div class="container3">
        <h5>Ayush Kumar Mishra</h5>
        <p>BTech CSE 3rd year</p>
        <p>ayushkrmishra1999@gmail.com</p>
      </div>
    </div>
  </div>
  </div>
  <div class="row1">
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Aditi Verma"/>
      <div class="container3">
        <h5>Adti Verma</h5>
        <p>BTech CSE 3rd year</p>
        <p>akankshashukla06865@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Tarun Kumar"/>
      <div class="container3">
        <h5>Tarun Kumar</h5>
        <p>BTech IT 3rd year</p>
        <p>akankshashukla06865@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Vivek Varshney"/>
      <div class="container3">
        <h5>Vivek Varshney</h5>
        <p>BTech ECE 3rd year</p>
        <p>akankshashukla06865@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="column1">
    <div class="card4">
      <img src="https://thumbs.dreamstime.com/z/technical-support-customer-service-business-technology-internet-concept-126588020.jpg" width="70%" height="200" alt="Kumar Yash"/>
      <div class="container3">
        <h5>Kumar Yash</h5>
        <p>BTech IT 3rd year</p>
        <p>akankshashukla06865@gmail.com</p>
      </div>
    </div>
  </div>
</div>

       <Footer/>
    </div>
  )
}

export default About