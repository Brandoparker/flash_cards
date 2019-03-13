


  $(document).ready( () => {
    allCards = [
    {front: "this is the front of the card", back: "this is the back of the card"},
    {front: "this is the second front", back: "this is the second back"},
    {front: "this is the third front", back: "this is the third back"},
  ]

   $(document).on('click', '.create', () => {
    event.preventDefault();
    front = document.getElementById('new-front').value
    back = document.getElementById('new-back').value
        console.log(allCards)

    allCards.push({front, back})
    console.log(allCards)
    //debugger
  })
  $(document).on('click', '.showcard', () => {
    event.preventDefault();
    //debugger
    console.log(allCards)
    randomCard = allCards[Math.floor(Math.random() * allCards.length)]
    $('#card-front').text(randomCard.front)
    $('#card-back').text(randomCard.back)
  })

  $(document).on('click', '.flip', ({ target }) => { 
    event.preventDefault();
    card = $(target).parent('.card')
    card.children('.c-body').toggleClass('hide')
  })
  
})