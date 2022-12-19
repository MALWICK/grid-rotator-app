const list = [1, 4, 7, 8, 9, 6, 3, 2]

const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
const btn6 = document.getElementById('6')
const btn7 = document.getElementById('7')
const btn8 = document.getElementById('8')
const btn9 = document.getElementById('9')
const rotateNumber = document.querySelectorAll('.numchanger')
const btn5 = document.querySelector('.numberchanger')

btn5.addEventListener('click', function () {
  reverseNumber()
  rotate()
})

function reverseNumber () {
  const index1 = list.pop()
  list.unshift(index1)
}

for (const i of rotateNumber) {
  i.addEventListener('click', function () {
    antiWise()
    rotate()
  })
}

function antiWise () {
  const index1 = list.shift()
  list.push(index1)
}

function rotate () {
  btn1.innerHTML = list[0]
  btn2.innerHTML = list[7]
  btn3.innerHTML = list[6]
  btn4.innerHTML = list[1]
  btn6.innerHTML = list[5]
  btn7.innerHTML = list[2]
  btn8.innerHTML = list[3]
  btn9.innerHTML = list[4]
}
