import React from 'react';
import { useEffect, useState } from "react";
import Input from './components/Input'
import Search from './components/Search';
import { ArrayForGrid } from "./components/Main";
import './App.css';

function App() {

    const [length, setLength] = useState(0);
    const [breadth, setBreadth] = useState(0);
    const [generatedArray, setGeneratedArray] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading1, setIsLoading1] = useState(true);

           useEffect(()=>{
            setTimeout(()=>{
              setIsLoading1(false);
            },3000);
        },[]);
        useEffect(()=>{
          setTimeout(()=>{
            setIsLoading(false);
          },2000);
      },[]);      

    useEffect(() => {
        if (length !== 0 || breadth !== 0) {
            setGeneratedArray(ArrayForGrid(length, breadth));
        }
    }, [length, breadth]);

    
     
  return (
            
            // isLoading ?
            // <img src="https://mobigic.com/img/mobigic_logo.svg"/>:
            isLoading1?
            <div>
            <h1 className="animate">Welcome to mobigic</h1>
            </div>:
            <div className="App">
            <Input 
                length={length}
                breadth={breadth}
                setLength={setLength}
                setBreadth={setBreadth}
            />
            <Search
                tableArray={generatedArray}
                length={length}
                breadth={breadth}
            />
    </div>
  );
}

export default App;
