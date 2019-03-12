$(document).ready(function(){
  const flashCards = [ 
    {
      question:'question', answer:'answer'
      },
    {
      question:'question', answer:'answer'
      },
      {
      question:'question', answer:'answer'
      }
  ]
  let randomCard = () => {
    let flashCard = flashCards[Math.floor(Math.random() * flashCards.length)];
    $('.question').html(`${flashCard.question}`);
    $('.answer').html(`${flashCard.answer}`);
   debugger
  };
  
  
  $('button').click(function() { 
    $('p').toggleClass('answer')
    $('.answer').toggleClass("showBack")
  })
  $('.nextCard').click(function(){
    randomCard()
    $('p').toggleClass('answer')
  
  }
    
  )
  randomCard()})