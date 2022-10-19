/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        let result = "";
        result += `<ul>`;
        for (let index = 0; index < this.phrase.length; index++) {
            const letter = this.phrase[index];
            if (letter == " ") {
                result += `<li class="space"> </li>`;
            } else {
                result += `<li class="hide letter ${letter}">${letter}</li>`
            }
        }
        result += `</ul>`;

        document.querySelector('#phrase').innerHTML = result;
    };
    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {

       const result = this.phrase.includes(letter)
        return result;

    };
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {

       const elements =  document.querySelectorAll(`.${letter}`);
        elements.forEach(element => {
            element.classList.remove("hide");
            element.classList.add("show");
        });
    };
}