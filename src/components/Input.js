import { useState } from 'react';
import '../App.css';


const Input = (props) => {
  const {setBreadth, setLength } = props;
  const [length1,setLength1]=useState();
  const [breadth1,setBreadth1]=useState(0);
  
  function length2(){
    setLength(length1)
  }
  function breadth2(){
    setBreadth(breadth1)
  }
  return (
    <div className="in">
      <div>
      <label >Enter no. of rows:</label>
      <input 
        id="length-input"
        type="number"
        value={length1}
        onChange={(e) => setLength1(e.target.value)}
        placeholder="Enter Length"
      />
      </div>
      <br/>
      <div>
        <label>Enter no. of columns:</label>
      <input 
        id="breadth-input"
        type="number"
        value={breadth1}
        placeholder="Enter Breadth"
        onChange={(e) => setBreadth1(e.target.value)}
      />
      </div>
      
      <br/>
      <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={() => {length2();breadth2() }}>Create</button>
      
    </div>
  );
};
export default Input