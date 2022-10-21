/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.querySelector('#btn__reset').addEventListener('click', function (e) {

    //remove css and disable  from keys
    const keys = document.querySelectorAll('.key');
    keys.forEach(element => {
        element.disabled = false;
        element.classList.remove('chosen')
        element.classList.remove('wrong')
    });
    //reseting hearts

    const hearts = document.querySelector('#scoreboard').querySelectorAll('.tries');

    hearts.forEach(element => {
        element.children[0].src = 'images/liveHeart.png';
    });

    game = new Game();
    game.startGame();

})


const keys = document.querySelectorAll('.key');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", (e)=>{
    game.handleInteraction(e)
    });
}


