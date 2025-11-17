/* eslint-disable no-unused-vars */

import React, { use, useState } from "react";
import "./App.css";

function App() {

let [grade, setGrade] = useState(50)

  let [fighter1Age, setFighter1Age] = useState(50)
  let [fighter1Point, setFighter1Point] = useState(50)

  let [fighter2Age, setFighter2Age] = useState(50)
  let [fighter2Point, setFighter2Point] = useState(50)



  return (
    <>
      <h1>This is my vite project {grade}</h1>

      <button onClick={() => {
        setGrade(grade - 1);
      }}>Increment</button>




      <h1>fight----------------------------</h1>

      <div>
        <h1>fighter 1</h1>

        <h2>fighter 1 point is { fighter1Point}</h2>
        <h2>fighter 1 age is {fighter1Age}</h2>
        
        <button onClick={() => {
          setFighter2Age(fighter2Age - 1)
          setFighter2Point(fighter2Point -2)
        }}>Fighter 1 fight</button>
      </div>
      
      <div>
        <h1>fighter 2</h1>

        <h2>fighter 2 point is { fighter2Point}</h2>
        <h2>fighter 2 age is {fighter2Age}</h2>
        
        <button onClick={() => {
          setFighter1Age(fighter1Age - 1)
          setFighter1Point(fighter1Point - 2)
        }}>Fighter 2 fight</button>
      </div>
    </>
  );
}

export default App;
