import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [color,setColor] = useState("#cccccc");
 let pallete = document.querySelector(".pallete");
  let colorHandler = ()=> {
    let hex = Math.floor(Math.random()*16777215).toString(16);
    setColor("#"+hex);
    pallete.style.backgroundColor= "#"+hex;
    return hex;
  }
  return (
    <div className="App">

      <div className="pallete">
          
      </div>
  <br />
      <button onClick={() => colorHandler()}>
        Click me
      </button>
    </div>
  );
}

export default App;
