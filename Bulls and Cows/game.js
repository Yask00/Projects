var guessNumber;
var searchedNumber;
var tryCount = 0;

function CreateSearchedNumber() {
    var arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var firstDigit = arrOne.splice([Math.floor(Math.random() * arrOne.length)], 1);
    var arr = [0, ...arrOne];

    var secondDigit = arr.splice([Math.floor(Math.random() * arr.length)], 1),
        thirdDigit = arr.splice([Math.floor(Math.random() * arr.length)], 1),
        lastDigit = arr.splice([Math.floor(Math.random() * arr.length)], 1);

    //var num = 1000 * firstDigit + 100 * secondDigit + 10 * thirdDigit + 1 * lastDigit;
    //return num;  //typeof number

    return `${firstDigit}${secondDigit}${thirdDigit}${lastDigit}`; //typeof string
}

searchedNumber = CreateSearchedNumber();


function compareNumbers(input, searched) {
    var bulls = 0,
        cows = 0;
    var guessLastDigit = input.substr(3, 1),
        guessThirdDigit = input.substr(2, 1),
        guessSecondDigit = input.substr(1, 1),
        guessFirstDigit = input.substr(0, 1);

    if (input.length !== 4) {
        return `Моля четири цифри`;
    }

    if (guessFirstDigit === guessSecondDigit || guessFirstDigit === guessThirdDigit || guessFirstDigit === guessLastDigit ||
        guessSecondDigit === guessThirdDigit || guessSecondDigit === guessLastDigit ||
        guessThirdDigit === guessLastDigit) {

        return `Повтарящи се цифри`;
    }

    if (input[0] === '0') {
        return `Не започва с 0`;
    }

    var regExpr = /(^[0-9]{4}$)/g;
    var digitCheck = regExpr.test(input);

    if (!digitCheck) {
        return `Използвайте цифри`;
    }

    for (var i = 0; i < input.length; i += 1) {
        if (input[i] === searched[i]) {
            bulls += 1;
        }
        else if (input[i] === searched[i + 1] || input[i] === searched[i + 2] || input[i] === searched[i + 3] || // a lot of undefined
            input[i] === searched[i - 1] || input[i] === searched[i - 2] || input[i] === searched[i - 3]) {
            cows += 1;
        }
    }

    if (input === searched) {
        tryCount += 1;
        return 'Познахте чрез ' + tryCount + ' опита, започнете нова игра!!';
    }
    else {
        tryCount += 1;
        //return `Бикове : ${bulls} Крави : ${cows}`;
        return 'Бикове: ' + bulls + ' Крави: ' + cows;
    }
}

function addPar() {
    var result = document.getElementById("number").value;
    result = result.htmlEscape();

    var newParagraph = document.createElement('p');
    var compared = compareNumbers(result, searchedNumber);

    newParagraph.innerHTML = '(Число: ' + result + ') ' + compared;
    newParagraph.style.borderBottom = '1px solid black';

    var firstChild = document.getElementById("paragraphs").firstElementChild;
    document.getElementById("paragraphs").insertBefore(newParagraph, firstChild);
    document.getElementById("number").value = '';
}

var submitArea = document.getElementById('number');

submitArea.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 13 && tryCount < 10) {
        addPar();
    }

    else if (ev.keyCode === 13 && tryCount >= 10) {
        var newParagraph = document.createElement('p');
        newParagraph.innerHTML = 'Изчерпахте вашите 10 опита';
        var firstChild = document.getElementById("paragraphs").firstElementChild;
        document.getElementById("paragraphs").insertBefore(newParagraph, firstChild);
        document.getElementById("number").value = '';
    }
});

var restartGame = document.getElementById('startNewGame');

restartGame.addEventListener('click', function () {
    window.location.reload();
});

var showNumber = document.getElementById('searchedNumber');
showNumber.addEventListener('click', function () {
    showNumber.innerHTML = searchedNumber;
});

String.prototype.htmlEscape = function () {
    let escapedStr = String(this)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39');
    return escapedStr;
};
