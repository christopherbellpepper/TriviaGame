$(document).ready(function() {
  $(".time-div").hide();
  $('.score-div').hide();
  
  var questions = [
    {
      question: "Which of the songs below was not a song done by the gang?",
      guesses: ["Go For It", "Friends Forever", "Did We Ever Have a Chance", "You Aint Seen Nothin Yet"],
      answer: 3
    },
     {
      question: "What was the original title of this television series?",
      guesses: ["The Detention Chronicles", "Good Morning, Miss Bliss ", "Valley High Blues", "River View High"],
      answer: 1
    },
     {
      question: "Whos was Screech in love with?",
      guesses: ["Jessie", "Kelly", "Lisa", "Miss Bliss"],
      answer: 2
    },
     {
      question: "What television station did this show's pilot first appear on?",
      guesses: ["The Disney Channel", "CBS", "FOX", "NBC"],
      answer: 3
    },
     {
      question: "How many episodes of 'Saved by the Bell: the College Years' were made?",
      guesses: ["19", "17", "20", "21"],
      answer: 0
    },
     {
      question: "In the episode 'Mystery Weekend', how much money is the grand prize for solving the mystery?",
      guesses: ["$1,000", "$750", "$500", "$100"],
      answer: 2
    },
     {
      question: "What nickname does Samuel Powers go by?",
      guesses: ["Squeek", "Screech", "Squak", "Skeeter"],
      answer: 1
    },
     {
      question: "Who was the original hall monitor?",
      guesses: ["Nick", "Norm", "Ned", "Neil"],
      answer: 3
    },
     {
      question: "In the episode 'Breaking Up Is Hard To Undo', how many pizzas does Mr. Belding buy for the guys?",
      guesses: ["3", "4", "5", "6"],
      answer: 1
    },
     {
      question: "In the episode 'House Party', what winning poker hand results in Screech's dog being won by Maxwell Nerdstrom?",
      guesses: ["Four Kings", "Four Queens", "Four Jacks", "Four Aces"],
      answer: 0
    }
  ]

  var startTime = 30;
  var timer;
  var currentQuestion = 0;
  var correctAnswers = 0;
  var wrongAnswers = 0;

  // timer
  function countdown() {
    startTime--;
    $('#time').html(startTime);
    if (startTime === 0) {
      alert('Time is up');
      $('.score-div').show();
      $('.questions-box').hide();
      $('.answers-box').hide();
      clearInterval(timer);
    }
  };

 // on click starts timer and loads first question
  $('#start-button').on('click', function() {
    timer = setInterval(countdown, 1000);
    loadQuestion();

    $("#start-button").hide();
    $(".instructions").hide();
    $(".time-div").show();
 
  });

  // loads questions one after the other
  function loadQuestion() {
    $(".questions-box").html('<h2>' + questions[currentQuestion].question + '</h2>')
    for (var i = 0; i < questions[currentQuestion].guesses.length; i++) {
      const clickedAnswerKey = i
      console.log('current question #', currentQuestion);
      $(".answers-box").append(`<button data-answer=${clickedAnswerKey} 
      class=answer-button>${questions[currentQuestion].guesses[clickedAnswerKey]}</button>`)
    }
  }

  // cycles through questions once an answer is selected
  $(document).on('click','.answer-button', function(event) {
    
    evaluateQuestion(event.target);
    clearQuestion();
    loadQuestion();
    
  });

  function evaluateQuestion(clickedAnswer) {
    console.log(
      'current question#', currentQuestion
    )
    console.log('clicked answer: ', );
    if (parseInt($(clickedAnswer).attr('data-answer')) === questions[currentQuestion].answer) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }

    

    console.log('correct answers:', correctAnswers);
    console.log('wrong answers:', wrongAnswers);
    console.log('jQuery data answer', $(clickedAnswer).attr('data-answer'));
  console.log('actual answer', questions[currentQuestion].answer);

  currentQuestion++;
  $('.score-div').html("You answered " + correctAnswers + " questions correctly!");
  }

 function clearQuestion() {
  $(".answers-box").empty();
 }
});