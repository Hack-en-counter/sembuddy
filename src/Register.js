import React, {useState}from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import "./App.css";

const Register = () => {
  const [email,setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [branch, setBranch]=useState("");
  const [year, setYear]=useState("");
  const [contact, setContact]=useState("");
  const [registerEntry, setAllEntry]=useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={email: email, password: password, branch: branch, year: year, contact: contact};
    setAllEntry([...registerEntry, newEntry]);
    
  }
  return (
    <>
    <Navbar/>
    <div className="register">
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autocomplete="off"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Branch</label>
                <input type="text" name="branch" id="branch" autocomplete="off"
                value={branch}
                onChange={(e)=>setBranch(e.target.value)}
                />
            </div>
            <div>
                <label>Year</label>
                <input type="text" name="year" id="year" autocomplete="off"
                value={year}
                onChange={(e)=>setYear(e.target.value)}
                />
            </div>
            <div>
                <label>Contact</label>
                <input type="text" name="contact" id="contact" autocomplete="off"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Create Your Password</label>
                <input type="password" name="password" id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                <p></p>
            </div>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/Login">Sign In</Link></p>
        </div>
        <Footer/>
    </>
  )
}

export default Register