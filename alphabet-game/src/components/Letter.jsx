// Letter.jsx
import React from "react"

const Letter = ({ letter, onLetterClick }) => {
  const handleClick = () => {
    onLetterClick(letter)
  }

  return (
    <div card className="w-24 h-24 relative" onClick={handleClick}>
      <div>
        <span className="w-full h-full absolute text-7xl flex justify-center items-center rounded-lg shadow-2xl backface-hidden border-blue-500 border-solid border-4 bg-white cursor-pointer">
          {letter}
        </span>
      </div>
    </div>
  )
}

export default Letter
