import profile from "./image/webpgbg.png";
import logo from "./image/cq_logo.png";
import { Component } from "react";
import './App.css';

function App(){
  return (
    <body>
      <div className="logo">
        <img src={logo} alt="logo" width={140} height={140}></img>
        </div>
        <div className="title">
        <p>CAREER QUEST</p>
      
      </div>
      
      <div className="cover">
         <div className="covers">
      <input type="text" placeholder="Email" size={40}></input>
      <br></br>
      <br></br>
  <input type="password" placeholder="Password" size={40} ></input>
  <br></br>
  <div>
    <br></br>
 <a href="#">Forgot password</a>
 </div>
  <input type="button" value="LOGIN"></input>  
   <p> </p>
  </div> 
   
  </div>

  
    </body>
      
  );
}

export default App; 