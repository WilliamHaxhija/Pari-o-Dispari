const userOddOrEven = prompt('Pari o Dispari? Scrivi una delle due :)');
const userNumber = parseInt(prompt('Scegli un numero da 1 a 9'));
alert('Pronta/o a scoprire chi ha vinto?');
const computerNumber = Math.floor(Math.random() * 9) + 1;
const sum = userNumber + computerNumber;
let gameResult;
if (sum % 2 === 0) {
    gameResult = 'Pari'
} else {
    gameResult = 'Dispari';
}
if (userOddOrEven == gameResult) {
    document.getElementById('result-win').innerHTML = 'Hai Vinto! :D'
} else {
    document.getElementById('result-lost').innerHTML = 'Hai Perso! :('
}