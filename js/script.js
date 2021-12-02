"use strict";



function playBot() {
    function gameIteration() {
        const random = 10;
        let value = prompt('Число от 1 до 100')
        value = typeof value === 'string' ? Number(value) : null;
        if (value === random) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (value === null) {
            alert("Игра окончена");
        } else if (random < value) {
            alert("Загаданное число меньше. Введите новое число.");
            gameIteration();
        } else if (random > value) {
            alert("Загаданное число больше. Введите новое число.");
            gameIteration();
        } else if (typeof value !== Number) {
            alert("Введи число!");
            gameIteration();
        }
    }
    gameIteration();
}
playBot();