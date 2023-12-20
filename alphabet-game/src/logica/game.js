//game.js
let game = {
  wordList: [
    { name: "LUCCA", photo: "../assets/images/Lucca.jpg" },
    { name: "CRISTIANE", photo: "../assets/images/Cris.jpg" },
    { name: "MATTEO", photo: "../assets/images/Matteo.jpg" },
  ],

  indexWord: null,
  array: [],
  indexLetter: [],
  arrayEmbaralhado: [],
  qntCaracteres: null,
  index: 0,

  sortWord: function () {
    this.indexWord = Math.floor(Math.random() * this.wordList.length)
    // console.log(this.indexWord)
    this.array = this.wordList[this.indexWord].name.split("")
    // console.log(this.array)
    // this.indexLetter = []
    // this.arrayEmbaralhado = []
    this.qntCaracteres = 15 - this.array.length
    // this.index = 0
    this.addRandomCharacter()
    // console.log("sortWord", this.array)
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

  createLetters: function () {
    this.sortWord()

    return this.arrayEmbaralhado
  },
}

export default game
