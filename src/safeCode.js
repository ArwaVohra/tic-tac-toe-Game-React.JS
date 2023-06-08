import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
// import shadow from '@mui/material/shadow';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './App.css'
import { Typography } from '@mui/material';

import Win from './winner.js'

function Squares({ value, onSquareClicked }) {
  return (
    <button
      style={{ color: '#aa00ff' }}
      className='square'
      onClick={onSquareClicked} >{value}</button>
  )
}

function Board({xIsNext, square, onPlay}) {
 

  const handleClick = (i) => {
    if (square[i] || GameWinner(square)) {
      return;
    }
    const dupliSquare = square.slice();

    if (xIsNext) {
      dupliSquare[i] = "X"
    }
    else (
      dupliSquare[i] = "0"

    )
    onPlay(dupliSquare)
  }


  const winner = GameWinner(square)
  let one = localStorage.getItem(1)
  let two = localStorage.getItem(2)
  let won
  if (winner == 'Player X') {
    won = one
  }
  else {
    won = two
  }
  let status;
  if (winner) {
    status = 'WINNER : ' + won;
    // <Win winner={winner} />
  }
  else {
    status = 'Next Player : ' + (xIsNext ? one : two)
  }

  return (

    <div className="bodyy " >
      <h1 style={{ color: '#2979ff' }} >TIC-TAC-TOE</h1>
      <h2 style={{ color: '#2979ff' }} > {status} </h2>
      {/* <Container maxWidth="xs" sx={{ height: '25rem', boxShadow: 12, borderRadius: '10px', backgroundColor: "#282c34" }}> */}
      <div style={{ position: 'left' }} >
        <div className="board-row">
          <Squares value={square[0]} onSquareClicked={() => handleClick(0)} />
          <Squares value={square[1]} onSquareClicked={() => handleClick(1)} />
          <Squares value={square[2]} onSquareClicked={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Squares value={square[3]} onSquareClicked={() => handleClick(3)} />
          <Squares value={square[4]} onSquareClicked={() => handleClick(4)} />
          <Squares value={square[5]} onSquareClicked={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Squares value={square[6]} onSquareClicked={() => handleClick(6)} />
          <Squares value={square[7]} onSquareClicked={() => handleClick(7)} />
          <Squares value={square[8]} onSquareClicked={() => handleClick(8)} />
        </div>
      </div>
      {/* </Container> */}

      <hr />
      <br />
      <br />
      <br />

      {/* <h2 style={{ color: '#2979ff' }} ><font text-align='left' >Go Back To ...</font></h2> */}

    </div>

  )

  function GameWinner(square) {

    const listAns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < listAns.length; i++) {
      let [a, b, c] = listAns[i]
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        if (square[a] === 'X') {
          return 'Player X'
        }
        else {
          return 'Player Y'
        }
        // return square[a]

      }

    }
    return null;

  }

}

export default function SafeCode() {

  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquare = history[currentMove];

  function onPlayHandle(dupliSquare){
    const newHistory = [...history.slice(0, currentMove + 1), dupliSquare]
    setHistory(newHistory)
    setXIsNext(!xIsNext)
    setCurrentMove(newHistory.length - 1)
  }

  function JumpTO(moves){
    setCurrentMove(moves)
    setXIsNext(moves % 2 === 0)
  }

  const Move = history.map((squareValue, moveID) => {
    let description;
    if (moveID > 0) {
      description = 'Go To Move : ' + moveID;
    }
    else {
      description = 'Go To Start'
    }
    return (
      <b key={moveID} >
            <Button variant='contained' color="primary"  onClick={() => JumpTO(moveID)} >{description}</Button>
     &nbsp; &nbsp;
     
      </b>
    )
  })

  return (
    <div >
      <Board xIsNext={xIsNext} square={currentSquare} onPlay={onPlayHandle} />
      <div  className='bodyy2'>
        <center>
      <h2 style={{ color: '#2979ff' }} ><font >Go Back To ...</font></h2>
      </center>
        <p >{Move}</p>
      </div>

    </div>
  )
}