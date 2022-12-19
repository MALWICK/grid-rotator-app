//here i am creating new variable that my javascript that recognised them
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
const rotateNumber = document.querySelectorAll(".numChanger");
let btn5 = document.querySelector(".numberChanger");
console.log(btn5);

let list = [1, 2, 3, 6, 9, 8, 7, 4];
// here i am adding an event listener to my bottun 5 so that when its biegn clicked it generates an event

btn5.addEventListener("click", function () {
  // here i am calling my functions which has the logic to rotate my numbers
  reverseNumber();
  rotate();
});

function reverseNumber() {
  let index1 = list.pop(); //pop removes the last item of our array and stores it
  list.unshift(index1); //while unshift puts our items that was biegn removed at th begining of our array
}

for (i of rotateNumber) {
  i.addEventListener("click", function () {
    antiWise();
    rotate();
  });
}

function antiWise() {
  let index1 = list.shift();
  list.push(index1);
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
