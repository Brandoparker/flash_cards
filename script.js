$(document).ready(function(){
  const flashCards = [ 
    {
      question:'samplequestion', answer:'samepleanswer'
      },
    {
      question:'2samplequestion', answer:'2sampleanswer'
      },
      {
      question:'3samplequestion', answer:'3sampleanswer'
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