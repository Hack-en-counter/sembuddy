import {React,useState} from 'react'
import "../App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocalState } from '../util/useLocalStorage';

const Contribute = () => {
  const [branch,setBranch]=useState("");
  const [semester,setSemester]=useState("");
  const [contritype, setContritype]=useState("");
  const [file, setFile]=useState("");
  const [contributionEntry, setAllEntry]=useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={branch: branch, semester: semester, file: file};
    setAllEntry([...contributionEntry, newEntry]);
    console.log(newEntry);
  }
  const [jwt, setJwt]=useLocalState("","jwt");
  return (
    <div>
    <Navbar/>
    <div className="contribute">
        <form action="" onSubmit={submitForm}>
            <div>
                <label>Branch</label>
                <input type="text" name="branch" id="branch" autocomplete="off"
                value={branch}
                  onChange={(e)=>setBranch(e.target.value)}
                />
            </div>
            <div>
                <label>Semester</label>
                <input type="text" name="semester" id="semester" autocomplete="off"
                value={semester}
                  onChange={(e)=>setSemester(e.target.value)}
                />
            </div>
            <div>
                <label>Contribution Type</label>
                <input type="text" name="contritype" id="contritype" autocomplete="off"
               value={contritype}
                  onChange={(e)=>setContritype(e.target.value)}
                />
            </div>
            <div>
                <label>File Link</label>
                <input type="url" name="file" id="file"
                 value={file}
                  onChange={(e)=>setFile(e.target.value)}
                />
            </div>
            <div>
                <p></p>
            </div>
            <button type="submit">Contribute</button>
        </form>
        </div>
        <Footer/>
        </div>
  )
}

export default Contribute