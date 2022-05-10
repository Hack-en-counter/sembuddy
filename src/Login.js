import React, {useState}from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import "./App.css";
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password, setPassword]=useState("");
  const[allEntry, setAllEntry]=useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={email: email, password: password};
    setAllEntry([...allEntry, newEntry]);
    navigate("/");
    console.log(allEntry);
  }
  return (
    <>
    <Navbar/>
       <div className="login">
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autocomplete="off"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <p>      </p>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                 <p>      </p>
            </div>
            <button type="submit">Login</button>
            <div>
              <p>     </p>
            </div>
        </form>
        <p>New User? <Link to="/Register">Register</Link></p>
        </div>
        <Footer/>
    </>
  )
}

export default Login