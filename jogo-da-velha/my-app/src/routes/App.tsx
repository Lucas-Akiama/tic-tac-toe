import React from 'react';
import '../css/App.css';
import { Outlet } from "react-router-dom" 
import { useState } from "react";
import Board from "../components/Board";
import Welcome from '../components/welcome';


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  const [starGame, setStartGame] = useState<boolean>(true);

  //LOCAL STORAGE---------------------------------------------------
  const [valueNamePlayerX, setNamePlayerX] = useState<string>('');
  const storageNamePlayerX = ( namePlayerX:string, valueNamePlayerX:string) => {
    localStorage.setItem(namePlayerX, valueNamePlayerX);
  };
  const [valueNamePlayerO, setNamePlayerO] = useState<string>('');
  const storageNamePlayerO = (namePlayerO: string, valueNamePlayerO: string) => {
    localStorage.setItem(namePlayerO, valueNamePlayerO);
  };

 
  //----------------------------------------------------------------
    function handleStartGame(){
    storageNamePlayerX("playerX", valueNamePlayerX)
    storageNamePlayerO("playerO", valueNamePlayerO)
    setStartGame(false)
  }
  
  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares: any[] = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory: any[] = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description: string;
    if (move > 0) {
      description = "Movimento #" + move;
    } else {
      description = "Vá para o início";
    }

    let colorChange: boolean = move % 2 === 0;
    return (
      <li className="listMoves" key={move}>
        <button
          className={colorChange ? "button-default" : "button-blue"}
          onClick={() => jumpTo(move)}
        >
          {" "}
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      
      {starGame ? (
        <Welcome
        valueNamePlayerX={valueNamePlayerX}
        valueNamePlayerO={valueNamePlayerO}
        setNamePlayerX={setNamePlayerX}
        setNamePlayerO={setNamePlayerO}
        handleStartGame={()=> handleStartGame()}
        />
      ) : (
        <div className="game">
          <div className="game-board">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      )}
    </>
  );
}
