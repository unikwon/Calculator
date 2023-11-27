const form = document.querySelector('#form');
const bAC = document.querySelector('#bAC')
const display = document.querySelector('#display');
const bOne = document.querySelector('#bOne');
const bTwo = document.querySelector('#bTwo');
const bThree = document.querySelector('#bThree');
const bFour = document.querySelector('#bFour');
const bFive = document.querySelector('#bFive');
const bSix = document.querySelector('#bSix');
const bSeven = document.querySelector('#bSeven');
const bEight = document.querySelector('#bEight');
const bNine = document.querySelector('#bNine');
const bZero = document.querySelector('#bZero');
const bPoint = document.querySelector('#bPoint');
const bDivide = document.querySelector('#bDivide');
const bMultiply = document.querySelector('#bMultiply');
const bAdd = document.querySelector('#bAdd');
const bDeduct = document.querySelector('#bDeduct');
const bPercentage = document.querySelector('#bPercentage')
const bPlusMinus = document.querySelector('#plusMinus');
const bTotal = document.querySelector('#bTotal');
const secondDisplay = document.querySelector('#secondDesplay')
const bBack = document.querySelector('#bBack');
const bMPlus = document.querySelector('#bMPlus');
const bMMinus = document.querySelector('#bMinus');
const bMR = document.querySelector('#bMR')
const bMC = document.querySelector('#bMC')
const p = document.querySelector('p');
const mContainer = document.createElement('h5')
const ul = document.querySelector('ul')
const bPI = document.querySelector('#bPI');
const bFraction = document.querySelector('#bFraction');
const bSquare = document.querySelector('#bSquare');
const bSquareRoot = document.querySelector('#bSquareRoot');

const bClear = document.createElement('button');

let memoryTotal = 0;
let isCalculation = false;
let operator = '';
let input = 0;

bMPlus.addEventListener('click', function (e) {
    e.preventDefault(e);
    memoryTotal += getNumber();
    mContainer.innerText = `m = ${memoryTotal} `;
    p.append(mContainer);
})

bMMinus.addEventListener('click', function (e) {
    e.preventDefault(e);
    memoryTotal -= getNumber();
    mContainer.innerText = `m = ${memoryTotal} `;
    p.append(mContainer);
})

const getNumber = () => {
    let addNumber = parseFloat(display.innerText);
    return addNumber;
}

bMR.addEventListener('click', function (e) {
    e.preventDefault();
    display.innerText = mContainer.innerText;
})

bMC.addEventListener('click', function (e) {
    e.preventDefault();
    p.innerText = '';
    memoryTotal = 0;
})

bAC.addEventListener('click', function (e) {
    e.preventDefault();
    if (bAC.innerText === 'AC') {
        display.innerText = '';
        secondDisplay.innerText = '';
        ul.textContent = '';
        p.innerText = '';
    } else {
        display.innerText = '';
        bAC.innerText = 'AC';
    }
})

bOne.addEventListener('click', function (e) {
    e.preventDefault();
    input = 1;
    includeNumber(input);
})

bTwo.addEventListener('click', function (e) {
    e.preventDefault();
    input = 2;
    includeNumber(input);
})

bThree.addEventListener('click', function (e) {
    e.preventDefault();
    input = 3;
    includeNumber(input);
})

bFour.addEventListener('click', function (e) {
    e.preventDefault();
    input = 4;
    includeNumber(input);
})

bFive.addEventListener('click', function (e) {
    e.preventDefault();
    input = 5;
    includeNumber(input);
})

bSix.addEventListener('click', function (e) {
    e.preventDefault();
    input = 6;
    includeNumber(input);
})

bSeven.addEventListener('click', function (e) {
    e.preventDefault();
    input = 7;
    includeNumber(input);
})

bEight.addEventListener('click', function (e) {
    e.preventDefault();
    input = 8;
    includeNumber(input);
})

bNine.addEventListener('click', function (e) {
    e.preventDefault();
    input = 9;
    includeNumber(input);
})

bZero.addEventListener('click', function (e) {
    e.preventDefault();
    input = 0;
    includeNumber(input);
})

bPlusMinus.addEventListener('click', function (e) {
    e.preventDefault();
    input = '-';
    includeNumber(input);
})

bPoint.addEventListener('click', function (e) {
    e.preventDefault();
    operator = '.';
    display.append(operator);
})

bBack.addEventListener('click', function (e) {
    e.preventDefault(e);
    const str = display.outerText;
    const newStr = str.slice(0, str.length - 1);
    display.innerText = newStr;
})

bDivide.addEventListener('click', function (e) {
    e.preventDefault();
    operator = ' / ';
    display.append(operator);
})

bMultiply.addEventListener('click', function (e) {
    e.preventDefault();
    operator = ' * ';
    display.append(operator);
})

bDeduct.addEventListener('click', function (e) {
    e.preventDefault();
    operator = ' - ';
    display.append(operator);
})

bAdd.addEventListener('click', function (e) {
    e.preventDefault();
    operator = ' + ';
    display.append(operator);
})

bPercentage.addEventListener('click', function (e) {
    e.preventDefault();
    operator = '%';
    input = specialCal(operator);
    includeNumber(input);
    display.innerText = input;
})

bPI.addEventListener('click', function (e) {
    e.preventDefault();
    operator = 'pi';
    input = specialCal(operator);
    includeNumber(input);
    display.innerText = input;
})

bFraction.addEventListener('click', function (e) {
    e.preventDefault();
    operator = 'fraction';
    input = specialCal(operator);
    includeNumber(input);
    display.innerText = input;
})

bSquare.addEventListener('click', function (e) {
    e.preventDefault();
    operator = 'sqr';
    input = specialCal(operator);
    includeNumber(input);
    display.innerText = input;
})

bSquareRoot.addEventListener('click', function (e) {
    e.preventDefault();
    operator = 'sqrRt';
    input = specialCal(operator);
    includeNumber(input);
    display.innerText = input;
})

bTotal.addEventListener('click', function (e) {
    e.preventDefault(e);
    caculate();
    const list = document.createElement('li');
    list.innerText = secondDisplay.textContent;
    ul.append(list);
})

function includeNumber(num) {
    if (isCalculation) display.innerText = '';
    display.append(num);
    isCalculation = false;
    bAC.innerText = 'C';
}

function caculate() {
    const str = display.innerText;
    let index = str.indexOf(' ');
    let num1 = parseFloat(str.slice(0, index));
    let num2 = parseFloat(str.slice(index + 2));

    if (str.charAt(index + 1) === '+') {
        num1 += num2
    } else if (str.charAt(index + 1) === '-') {
        num1 -= num2
    } else if (str.charAt(index + 1) === '*') {
        num1 *= num2
    } else if (str.charAt(index + 1) === '/') {
        num1 /= num2
    }

    display.innerText = num1;
    secondDisplay.innerText = `${str} = ${num1} `;
    // isCalculation = true;

    if (display.innerText === 'NaN' || index < 0) {
        display.innerText = "ERROR";
        secondDisplay.innerText = "ERROR";
    }
}

const specialCal = (o) => {
    const str = display.innerText;
    let number = parseFloat(display.innerText);
    let index = str.indexOf(' ');
    let num1 = parseFloat(str.slice(0, index));
    let num2 = parseFloat(str.slice(index + 2));
    let result = '';

    if (num2) {
        number = num2;
    }

    if (o === 'pi') {
        result = number * 3.14159265358;
        secondDisplay.innerText = `${number} * 3.14159265358 = ${result} `;
    } else if (o === 'fraction') {
        result = 1 / number;
        secondDisplay.innerText = `1 / ${number} = ${result} `;
    } else if (o === 'sqr') {
        result = number * number;
        secondDisplay.innerText = `${number} * ${number} = ${result} `;
    } else if (o === 'sqrRt') {
        result = Math.sqrt(number);
        secondDisplay.innerText = `√${number}= ${result}`;
    } else if (o === '%') {
        result = number / 100;
        secondDisplay.innerText = `${number}/100 = ${result}`;
    }

    const list = document.createElement('li');
    list.innerText = secondDisplay.textContent;
    ul.append(list);

    if (num2) {
        result = num1 + " " + str.charAt(index + 1) + " " + result;
    }
    return result;
}

