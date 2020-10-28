function firstNumber(num1, num2) {
  console.log(num1 + num2)
}

firstNumber(5, 17)

firstNumber(11, 23)

function newStudy(name) {
  return `Hello ${name}`
}

let greeting = newStudy('Kata')

console.log(greeting)

function modifyGreeting() {
  greeting = newStudy('Bélaaaaa')
}

let x = modifyGreeting()

console.log(greeting, x)

console.log(newStudy('Ferko'))
