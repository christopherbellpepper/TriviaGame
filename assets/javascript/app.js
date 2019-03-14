$(document).ready(function() {
  $(".time-div").hide();
  $(".questions").hide();
  $(".answers").hide();
  $("#next-button").hide();

  var triviaScores = {
    correct: 0,
    incorrect: 0,

    questions: {
      q1: "Which of the songs below was not a song done by the gang?",
      q2: "What was the original title of this television series?",
      q3: "Whos was Screech in love with?",
      q4: "What television station did this show's pilot first appear on?",
      q5: "How many episodes of 'Saved by the Bell: the College Years' were made?",
      q6: "In the episode 'Mystery Weekend', how much money is the grand prize for solving the mystery?",
      q7: "What nickname does Samuel Powers go by?",
      q8: "Who was the original hall monitor?",
      q9: "In the episode 'Breaking Up Is Hard To Undo', how many pizzas does Mr. Belding buy for the guys?",
      q10: "In the episode 'House Party', what winning poker hand results in Screech's dog being won by Maxwell Nerdstrom?"
    },

    guesses: {
      q1: ["Go For It", "Friends Forever", "Did We Ever Have a Chance", "You Ain't Seen Nothin Yet"],
      q2: ["The Detention Chronicles", "Good Morning, Miss Bliss ", "Valley High Blues", "River View High"],
      q3: ["Jessie", "Kelly", "Lisa", "Miss Bliss"],
      q4: ["The Disney Channel", "CBS", "FOX", "NBC"],
      q5: ["19", "17", "20", "21"],
      q6: ["$1,000", "$750", "$500", "$100"],
      q7: ["Squeek", "Screech", "Squak", "Skeeter"],
      q8: ["Nick", "Norm", "Ned", "Neil"],
      q9: ["3", "4", "5", "6"],
      q10: ["Four Kings", "Four Queens", "Four JAcks", "Four Aces"]
    },

    answers: {
      q1: "You Ain't Seen Nothin Yet",
      q2: "Good Morning, Miss Bliss ",
      q3: "Lisa",
      q4: "NBC",
      q5: "19",
      q6: "$500",
      q7: "Screech",
      q8: "Neil",
      q9: "4",
      q10: "Four Kings"
    }
  };

  $("#start-button").on("click", function(event) {
    event.preventDefault();
    var oneMinute = 60,
      display = document.querySelector("#time");
    startTimer(oneMinute, display);

    function startTimer(duration, display) {
      var timer = duration,
        seconds;
      setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
        alert("Times Up!");
        //   timer = duration;
        }
      }, 1000);

      $("#start-button").hide();
      $(".instructions").hide();
      $(".time-div").show();
      $(".questions").show();
      $(".answers").show();
      $("#next-button").show();

      
    }
  });
});
