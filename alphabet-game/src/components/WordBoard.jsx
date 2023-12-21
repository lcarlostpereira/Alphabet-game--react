//WordBoard.jsx
import React from "react"
import EmptyLetter from "./EmptyLetter"

const WordBoard = ({ word }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-5">
      {word.map((letter, index) => (
        <EmptyLetter key={index} letter={letter} />
      ))}
    </div>
  )
}

export default WordBoard
