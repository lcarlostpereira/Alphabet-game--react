import React from "react"
import EmptyLetter from "./EmptyLetter"

const WordBoard = () => {
  const name = ["L", "U", "C", "C", "A"]
  console.log(name[3])
  return (
    <div className="flex flex-row justify-center items-center gap-5">
      {name.map((letter, index) => (
        <EmptyLetter key={index} letter={letter} />
      ))}
    </div>
  )
}

export default WordBoard
