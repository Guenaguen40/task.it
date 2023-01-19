import React from 'react' 
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import "./style.css";
import { useState } from "react";

function Dashbord() {
    const [tasks, setTasks] = useState([
        { desc: "Learn React", id: 1, date: "2021-01-03 10:00", status: "Complete" },
        { desc: "Profit", id: 2, date: "2021-01-05 15:00", status: "Open" },
      ]);
      
      return (
        <div  className="App">
      <Header></Header>
      <div className="sections">
      <div className="section">
      <div className="container">
        <Tasks tasks={tasks}></Tasks>
      </div>
      </div>
      <div className="section table">
        <div className="container">
        
      </div>
      </div>
    </div>
    </div>
      );
    }
export default Dashbord;