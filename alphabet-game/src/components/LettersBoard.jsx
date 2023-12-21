//LettersBoard.jsx
import React from "react"
import Letter from "./Letter"

const LettersBoard = ({ letters, onLetterClick }) => {
  return (
    <>
      <div className=" mt-24 grid max-w-2xl gap-5 grid-cols-5 grid-rows-4">
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} onLetterClick={onLetterClick} />
        ))}
      </div>
    </>
  )
}

export default LettersBoard
