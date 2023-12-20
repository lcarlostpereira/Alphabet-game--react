//LettersBoard.jsx
import React from "react"
import Letter from "./Letter"

const LettersBoard = ({ letters }) => {
  console.log(letters)
  return (
    <>
      <div className=" mt-24 grid max-w-2xl gap-5 grid-cols-5 grid-rows-4">
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
      </div>
    </>
  )
}

export default LettersBoard
