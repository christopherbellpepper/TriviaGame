$(document).ready(function() {
  $(".time-div").hide();
  
  var questions = [
    {
      question: "Which of the songs below was not a song done by the gang?",
      guesses: ["Go For It", "Friends Forever", "Did We Ever Have a Chance", "You Aint Seen Nothin Yet"],
      answer: "You Aint Seen Nothin Yet",
    },
     {
      question: "What was the original title of this television series?",
      guesses: ["The Detention Chronicles", "Good Morning, Miss Bliss ", "Valley High Blues", "River View High"],
      answer: "Good Morning, Miss Bliss ",
    },
     {
      question: "Whos was Screech in love with?",
      guesses: ["Jessie", "Kelly", "Lisa", "Miss Bliss"],
      answer: "Lisa",
    },
     {
      question: "What television station did this show's pilot first appear on?",
      guesses: ["The Disney Channel", "CBS", "FOX", "NBC"],
      answer: "NBC",
    },
     {
      question: "How many episodes of 'Saved by the Bell: the College Years' were made?",
      guesses: ["19", "17", "20", "21"],
      answer: "19",
    },
     {
      question: "In the episode 'Mystery Weekend', how much money is the grand prize for solving the mystery?",
      guesses: ["$1,000", "$750", "$500", "$100"],
      answer: "$500",
    },
     {
      question: "What nickname does Samuel Powers go by?",
      guesses: ["Squeek", "Screech", "Squak", "Skeeter"],
      answer: "Screech",
    },
     {
      question: "Who was the original hall monitor?",
      guesses: ["Nick", "Norm", "Ned", "Neil"],
      answer: "Neil",
    },
     {
      question: "In the episode 'Breaking Up Is Hard To Undo', how many pizzas does Mr. Belding buy for the guys?",
      guesses: ["3", "4", "5", "6"],
      answer: "4",
    },
     {
      question: "In the episode 'House Party', what winning poker hand results in Screech's dog being won by Maxwell Nerdstrom?",
      guesses: ["Four Kings", "Four Queens", "Four JAcks", "Four Aces"],
      answer: "Four Kings"
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
      $(".answers-box").append(`<button data-answer=${questions[currentQuestion].answer} 
      class=answer-button>${questions[currentQuestion].guesses[i]}</button>`)
    }
  }

  // cycles through questions once an answer is selected
  $(document).on('click','.answer-button', function(event) {
    currentQuestion++;
    console.log(currentQuestion);
    evaluateQuestion(event.target);
    clearQuestion();
    loadQuestion();
    
  });

  function evaluateQuestion(clickedAnswer) {
    console.log('clicked answer: ', );
    if ($(clickedAnswer).attr("data-answer") === questions[currentQuestion].answer) {
      correctAnswers++;
    } else {
      wrongAnswers++
    }
    console.log('correct answers:', correctAnswers)
    console.log('wrong answers:', wrongAnswers);
  
  }

 function clearQuestion() {
  $(".answers-box").empty();
 }
});