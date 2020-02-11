let digits = document.querySelectorAll('.digit');
let currTime = 0;

let count = function () {
     currTime += 10; //currTime gets incremented by 10 
     if(currTime > 10 * 1000) {
         digits.forEach((digit) => digit.style.color = 'red');
         return ;
     } //Our limit to currTime, in this case no greater than 10sec
     setDigit(digits[4], 10, currTime);
     setDigit(digits[3], 100, currTime);
     setDigit(digits[1], 1000, currTime);
     setDigit(digits[0], 10000, currTime);
}

function setDigit (el, div, curr) {
    let digit = Math.floor(curr / div) % 10; //every digit gets divided by its place in the stopwatch
    el.textContent = digit;
}

setInterval(count, 10);
