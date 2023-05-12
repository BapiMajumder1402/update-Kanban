import React, { useState } from "react";
import style from "./Layout.module.css";
// import Details from "../details/Details";
import Navbar from "../navbar/Navbar";
import Board from "../../board/Board";
import Editable from "../../editable/Editable";

import { Outlet } from "react-router-dom";

import { v4 as uuid } from "uuid";

function Layout() {
  const [boards, setBoard] = useState([
    {
      id: uuid(),
      title: "Tasks",
      cards: [
        {
          id: uuid(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "FrontEnd",
              color: "green",
            },
          ],
          desc: "Hello everyone",
          date: "",
        },
        {
          id: uuid(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "urgent",
              color: "red",
            },
          ],
          desc: "Do it fast",
          date: "",
        },
      ],
    },
  ]);

  const addCard = (title, bid) => {
    const card = {
      id: uuid(),
      title,
      lables: [],
      tasks: [],
      desc: "",
      date: "",
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoard(tempBoards);
  };

  const deleteCard = (bid, cid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoard(tempBoards);
  };
  const addBoard = (title) => {
    setBoard([
      ...boards,
      {
        id: Date.now() + Math.round(),
        title,
        cards: [],
      },
    ]);
  };
  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => {
      return item.id !== bid;
    });
    setBoard(tempBoards);
  };
  return (
    <>
      <div className={style.mainLayout}>
        <div className={style.image}>
          <Navbar />
          <div className={style.outer_board}>
            <div className={style.inner_board}>
              {boards.map((item) => (
                <Board key={item.id} board={item} />
              ))}
              <Editable
                text="Add Board"
                placeholder="Enter Board Title"
                onSubmit={(value) => addBoard(value)}
              />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
