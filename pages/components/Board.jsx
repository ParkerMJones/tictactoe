import { useState } from 'react'
import OIcon from '../assets/icon-o.svg'
import XIcon from '../assets/icon-x.svg'
import Image from 'next/image'

const XInput = <Image src={XIcon} height={64} width={64} />
const OInput = <Image src={OIcon} height={64} width={64} />

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) {
    if (winner || squares[square]) {
      return
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div className="m-auto flex h-screen w-screen flex-col items-center justify-center">
      <div className="mb-4 flex h-12 w-36 items-center justify-center rounded-xl bg-light-navy font-bold text-gray-400 shadow-inner">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="btn btn-yellow mt-4 w-28" onClick={restart}>
        Restart
      </button>
    </div>
  )
}

function Game() {
  return <Board />
}

function calculateStatus(winner, squares, nextValue) {
  return winner ? (
    <div className="flex w-9/12 items-center justify-evenly">
      <p>Winner: </p>
      <Image src={winner.props.src} height={20} width={20} />
    </div>
  ) : squares.every(Boolean) ? (
    `Scratch: Cat's game`
  ) : (
    <div className="flex w-9/12 items-center justify-evenly">
      <p>TURN:</p>
      <Image src={nextValue.props.src} height={20} width={20} />
    </div>
  )
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? XInput : OInput
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a]
    }
  }
  return null
}

export default Game
