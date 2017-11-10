$(document).ready(onReady);

function onReady() {
    $('.submit').on('click', submitListener);
    $('.game').on('click', gameListener);
}

function submitListener() {
    numLoop($('.submission').val());
}

var randomNumber = Math.floor(Math.random() * 10 + 1);

function numLoop(inputNumber) {
    if (randomNumber < inputNumber) {
        console.log('Lower');
        $('#gameField').css('background-color', 'yellow');
        $('#promptField').children().replaceWith('<p id="promptText">Guess Lower</p>');
    } else if (randomNumber > inputNumber) {
        console.log('Higher');
        $('#gameField').css('background-color', 'orange');
        $('#promptField').children().replaceWith('<p id="promptText">Guess Higher</p>');
    } else if (randomNumber == inputNumber) {
        console.log('Equal');
        $('#gameField').css('background-color', 'green');
        $('#promptField').children().replaceWith('<p id="promptText">Good Guess</p>');
        $('#buttons').children().replaceWith('<button class="game button">New Game</button>')
        onReady();
    } else {
        $('#promptField').children().replaceWith('<p id="promptText">Enter a number ya goober</p>');
    }
}

function gameListener() {
    console.log('nope');
}

function submitListener() {
    numLoop($('.submission').val());
}