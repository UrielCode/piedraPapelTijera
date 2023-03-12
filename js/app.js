const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
        
      })
    })


    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        
        setTimeout(() => {
          // update images
          playerHand.src = `../img/${this.textContent}.png`;
          computerHand.src = `../img/${computerChoice}.png`;
          compareHands(this.textContent, computerChoice)
          
        }, 2000);

        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';

      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

  }

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');

    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    // Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Jugador gana';
        updateScore();
        pScore++;
        return;
      } else {
        winner.textContent = 'Computadora gana';
        updateScore();
        cScore++;
        return;
      }
    }

    // paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer wins';
        updateScore();
        cScore++;
        return;
      } else {
        winner.textContent = 'Player wins';
        updateScore();
        pScore++;
        return;
      }
    }

    // paper
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        winner.textContent = 'Computer wins';
        updateScore();
        cScore++;
        return;
      } else {
        winner.textContent = 'Player wins';
        updateScore();
        pScore++;
        return;
      }
    }



  }

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();