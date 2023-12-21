// App.jsx
import React, { useEffect, useState } from "react"
import "./App.css"
import Avatar from "./components/Avatar"
import WordBoard from "./components/WordBoard"
import LettersBoard from "./components/LettersBoard"
import game from "./logica/game"

function App() {
  const [letters, setLetters] = useState([])
  const [picture, setPicture] = useState([])
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)

  useEffect(() => {
    setLetters(game.createLetters())
    // setWord(game.array)
    setPicture(game.picture)
  }, [])

  const handleLetterClick = (clickedLetter) => {
    if (game.checkCorrectLetter(clickedLetter)) {
      setCurrentLetterIndex(currentLetterIndex + 1)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <Avatar picture={picture} />
        {/* <WordBoard word={game.array.slice(0, currentLetterIndex)} /> */}
        <WordBoard
          word={game.array
            .slice(0, game.array.length)
            .map((_, index) =>
              index < currentLetterIndex ? game.array[index] : " "
            )}
        />

        <LettersBoard letters={letters} onLetterClick={handleLetterClick} />
      </div>
    </>
  )
}

export default App
