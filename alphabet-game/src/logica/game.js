//game.js
let game = {
  wordList: [
    { name: "LUCCA", photo: "../assets/images/Lucca.jpg" },
    { name: "CRISTIANE", photo: "../assets/images/Cris.jpg" },
    { name: "MATTEO", photo: "../assets/images/Matteo.jpg" },
  ],

  indexWord: null,
  picture: null,
  array: [],
  indexLetter: 0,
  arrayEmbaralhado: [],
  qntCaracteres: null,
  index: 0,

  sortWord: function () {
    this.indexWord = Math.floor(Math.random() * this.wordList.length)

    this.array = this.wordList[this.indexWord].name.split("")

    this.qntCaracteres = 15 - this.array.length

    this.addRandomCharacter()
    this.setPicture()
  },

  addRandomCharacter: function () {
    this.arrayEmbaralhado = []
    const caracteresAleatorios = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const caracteresPresentes = new Set(this.array)
    const novosCaracteres = []

    while (novosCaracteres.length < this.qntCaracteres) {
      const indiceAleatorio = Math.floor(
        Math.random() * caracteresAleatorios.length
      )
      const caractereAleatorio = caracteresAleatorios[indiceAleatorio]

      if (
        !caracteresPresentes.has(caractereAleatorio) &&
        !novosCaracteres.includes(caractereAleatorio)
      ) {
        novosCaracteres.push(caractereAleatorio)
      }
    }

    this.arrayEmbaralhado.push(...this.array)
    this.arrayEmbaralhado.push(...novosCaracteres)

    this.arrayEmbaralhado = this.shuffleArray(this.arrayEmbaralhado)
    // console.log("AddRandomCharacter", this.arrayEmbaralhado)
  },
  shuffleArray: function (array) {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    // console.log("suffle array", newArray)
    return newArray
  },

  setPicture: function () {
    this.picture = this.wordList[this.indexWord].photo // Correção aqui
  },

  createLetters: function () {
    this.sortWord()

    return this.arrayEmbaralhado
  },

  checkCorrectLetter: function (clickedLetter) {
    const correctLetter = this.array[this.indexLetter]

    if (clickedLetter === correctLetter) {
      this.indexLetter++

      if (this.indexLetter === this.array.length) {
        this.indexLetter = 0
        return true
      }

      return true
    }

    return false
  },
}

export default game
