import React from 'react' 
import ReactDOM from "react-dom";
import Header from "../components/Header";
import { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import './style.css';
import tasks from './data';



const Dashbord = () => {
  const [board, setBoard] = useState({
    columns: [
      {
        id: 1,
        title: "Tasks",
        cards: tasks.map((task, index) => ({
          id: task.id,
          title: task.title,
          description: task.desc,
          content: task.duree,
        })),
      },
      {
        id: 2,
        title: "Monday",
        cards: [],
      },
      {
        id: 3,
        title: "Tuseday",
        cards: [],
      },
    {
      id: 4,
      title: "Wednesday",
      cards: [],
    },
  {
    id: 5,
    title: "Thursday",
    cards: [],
  },
{
  id: 6,
  title: "Friday",
  cards: [],
},
{
  id: 7,
  title: "Saturday",
  cards: [],
},
{
  id: 8,
  title: "Sunday",
  cards: [],
},
    ],
  });
  
  function onCardMove(card, source, destination) {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <div className="App">
      <Header />
      <Board className="smaller-columns" onCardDragEnd={onCardMove}  disableColumnDrag>
        {board}
      </Board>
    </div>
  );
};

export default Dashbord;
