const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn6 = document.getElementById('button6');
const btn7 = document.getElementById('button7');
const btn8 = document.getElementById('button8');
const btn9 = document.getElementById('button9');
const rotateNumber = document.querySelectorAll('.numchanger');
let btn5 = document.querySelector('.numberchanger');
console.log(btn5);

const list = [1, 2, 3, 6, 9, 8, 7, 4];

btn5.addEventListener('click', function () {
  reverseNumber();
  rotate();
});

function reverseNumber() {
  const index1 = list.pop();
  list.unshift('index1');
}

for (i of rotateNumber) {
  i.addEventListener('click', function () {
    antiWise();
    rotate();
  });
}

function antiWise() {
  const index1 = list.shift();
  list.push('index1');
}

function rotate() {
  btn1.innerHTML = list[0];
  btn2.innerHTML = list[1];
  btn3.innerHTML = list[2];
  btn4.innerHTML = list[7];
  btn6.innerHTML = list[3];
  btn7.innerHTML = list[6];
  btn8.innerHTML = list[5];
  btn9.innerHTML = list[4];
}
