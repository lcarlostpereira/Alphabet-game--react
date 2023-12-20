// App.jsx
import React, { useEffect, useState } from "react"
import "./App.css"
import Avatar from "./components/Avatar"
import WordBoard from "./components/WordBoard"
import LettersBoard from "./components/LettersBoard"
import game from "./logica/game"

function App() {
  const [letters, setLetters] = useState([])

  useEffect(() => {
    setLetters(game.createLetters())
    console.log("UseEffect", letters)
    console.log("passei aqui")
  }, [])
  console.log("App.jsx", letters)
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <Avatar />
        <WordBoard />
        <LettersBoard letters={letters} />
        {console.log("Abaixo de lettersboard", letters)}
        {console.log("Abaixo de lettersboard", game.arrayEmbaralhado)}
      </div>
    </>
  )
}

export default App
