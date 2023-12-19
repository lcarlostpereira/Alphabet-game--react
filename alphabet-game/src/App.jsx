import React, { useEffect, useState } from "react"
import "./App.css"
import Avatar from "./components/Avatar"
import WordBoard from "./components/WordBoard"
import LettersBoard from "./components/LettersBoard"

function App() {
  const [letters, SetLetters] = useState([])

  useEffect(() => {
    SetLetters(game.createLetters())
  })

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <Avatar />
        <WordBoard />
        <LettersBoard />
      </div>
    </>
  )
}

export default App
