/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

    constructor() {
        this.missed = 0;
        this.phrases = ['In a Pickle', 'Cut The Mustard', 'Raining Cats and Dogs', 'Down And Out', 'A Chip on Your Shoulder'];
        this.activePhrase = null;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let random_phrase = this.phrases[Math.floor((Math.random() * this.phrases.length))];
        return random_phrase;
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {

        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();

    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const elements = document.querySelectorAll('.hide');
        if (elements.length > 0) {
            return false;
        } else {
            return true
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        this.missed++;
        if (this.missed > 4) {
            this.gameOver(false)
        } else {
            const elements = document.querySelector('#scoreboard').querySelectorAll('.tries');
            elements[this.missed - 1].children[0].src = 'images/lostHeart.png';
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        let screen = document.querySelector('#overlay')
        screen.style.display = 'block';
        screen.className = "";
        if (gameWon) {
            screen.classList.add('win');
            document.querySelector('#game-over-message').innerHTML = "Great job!";
        } else {
            screen.classList.add('lose');
            document.querySelector('#game-over-message').innerHTML = "Sorry Better luck next time!";
        }
    };

   handleInteraction(e) {
    e.target.disabled = true;
    if (game.activePhrase.checkLetter(e.target.innerHTML)) {
        e.target.classList.add('chosen')
        game.activePhrase.showMatchedLetter(e.target.innerHTML)
        if (game.checkForWin()) {
            game.gameOver(true);
        }

    } else {
        e.target.classList.add('wrong')
        game.removeLife()
    }
};


}