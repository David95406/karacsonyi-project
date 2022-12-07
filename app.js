document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/telapo.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/hoember.png'
    },
    {
      name: 'ice-cream',
      img: 'images/harang.png'
    },
    {
      name: 'pizza',
      img: 'images/mezeskalacs.png'
    },
    {
      name: 'milkshake',
      img: 'images/karacsonyfa.png'
    },
    {
      name: 'hotdog',
      img: 'images/szarva.png'
    },
    {
      name: 'fries',
      img: 'images/telapo.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/hoember.png'
    },
    {
      name: 'ice-cream',
      img: 'images/harang.png'
    },
    {
      name: 'pizza',
      img: 'images/mezeskalacs.png'
    },
    {
      name: 'milkshake',
      img: 'images/karacsonyfa.png'
    },
    {
      name: 'hotdog',
      img: 'images/szarva.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/csomag.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/csomag.png')
      cards[optionTwoId].setAttribute('src', 'images/csomag.png')
      //alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/csomag.png')
      cards[optionTwoId].setAttribute('src', 'images/csomag.png')
      //alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Gratulálunk, mindet meg találtad! A code: 3acep4a'
      document.getElementById('scoreTxt').style.display = "none"
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
