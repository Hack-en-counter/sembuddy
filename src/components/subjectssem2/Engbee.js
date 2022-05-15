import React from 'react'
import Footer from '../Footer.js';
import Navbar from '../Navbar';
const Engbee = () => {
  return (
    <div className="sem">
      <Navbar/>
      <div data-aos="fade-up" data-aos-delay="150" class="aos-init aos-animate">
        <h1 id="ah">Basic Electrical Engineering</h1>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Papers</div>
          <div class="cell">Link</div>
        </div>
        <div class="r">
          <div class="cell">CT-1</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        <div class="r">
          <div class="cell">CT-2</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        <div class="r">
          <div class="cell">End Sems</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Guide</div>
          <div class="cell">Link</div>
        </div>
        <div class="r">
          <div class="cell">Quantum</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Books</div>
          <div class="cell">Link</div>
        </div>
        <div class="r">
          <div class="cell">Basic Electrical Engineering C L Wadhwa</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        <div class="r">
          <div class="cell">Abc of Electrical Engineering	Theraja B.L. and Theraja A.K.</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="table">
        <div class="r header">
          <div class="cell">Notes</div>
          <div class="cell">Link</div>
        </div>
        <div class="r">
          <div class="cell">Notes</div>
          <div class="cell">
            <a href="">Download</a>
          </div>
        </div>
        </div>
      </div>
    <Footer/>
    </div>
    //<div>Engbee</div>
  )
}

export default Engbee