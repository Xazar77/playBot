'use strict';



function playBot() {
    let count = 10;
    // let random = 50; // для теста
    let random = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(random);

    function gameIteration() {


        let value = prompt('Введите число от 1 до 100');

        value = typeof value === 'string' ? Number(value) : null;


        if (value === random) {
            alert('Поздравляю, Вы угадали!!!.Хотели бы сыграть еще?');
            gameIteration();
        } else if (count < 1) {
            alert('Попытки закончились, хотите сыграть еще?');
            playBot();
        } else if (value == null) {
            alert("Игра окончена. До встречи!");
        } else if (random < value) {
            alert(`Загаданное число меньше, осталось попыток ${count}. Введите новое число.`);
            count--;
            gameIteration();
        } else if (random > value) {
            alert(`Загаданное число больше, осталось попыток ${count}. Введите новое число.`);
            count--;
            gameIteration();
        } else if (typeof value !== Number || !value.trim()) {
            alert('Введите число!');
            gameIteration();
        }
    }
    gameIteration();
}
playBot();