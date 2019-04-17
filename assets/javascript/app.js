$(document).ready(function() {
  $(".time-div").hide();

  var questions = [
    {
      question: "Which of the songs below was not a song done by the gang?",
      guesses: ["Go For It", "Friends Forever", "Did We Ever Have a Chance", "You Ain't Seen Nothin Yet"],
      answer: "You Ain't Seen Nothin Yet",
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

  function countdown() {
    startTime--;
    $('#time').html(startTime);
    if (startTime === 0) {
      alert('Time is up');
      clearInterval(timer);
    }
  };
 
  $('#start-button').on('click', function() {
    timer = setInterval(countdown, 1000);
    loadQuestion();

    $("#start-button").hide();
    $(".instructions").hide();
    $(".time-div").show();
 
  });

  function loadQuestion() {
    $(".questions-box").html('<h2>' + questions[currentQuestion].question + '</h2>')
    for (var i = 0; i < questions[currentQuestion].guesses.length; i++) {
      $(".answers-box").append("<button class='answer-button'>" + questions[currentQuestion].guesses[i] + "</button>")
    }
  }

  $(document).on('click','.answer-button', function() {
    currentQuestion++;
    console.log(currentQuestion);
    clearQuestion();
    loadQuestion();

  });

 function clearQuestion() {
  $(".answers-box").empty();
 }
});