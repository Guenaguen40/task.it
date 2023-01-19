import React from 'react' 
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import "./style.css";
import { useState } from "react";

function Dashbord() {
    const [tasks, setTasks] = useState([
        { title: "React", desc: "Learn React", id: 1, date: "2021-01-03 15:00-14:00", status: "Complete" },
        { title: "doc", desc: "visiting the doc", id: 2, date: "2021-01-05 15:00-14:00", status: "Open" },
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
