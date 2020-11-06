const { errorLog, passedLog } = require('./utils')
const { checkIfGreaterThanTen } = require('../learning_tasks/firstStatement')

const testCases = [
  {
    num1: 1,
    num2: 3,
    shouldBe: false
  },
  {
    num1: 7,
    num2: 3,
    shouldBe: false
  },
  {
    num1: 10,
    num2: 3,
    shouldBe: true
  },
  {
    num1: 15,
    num2: -7,
    shouldBe: false
  }
]

const testYourFunction = () => {
  testCases.forEach((testCase) => {
    const { num1, num2, shouldBe } = testCase
    const result = checkIfGreaterThanTen(num1, num2)
    if (result === shouldBe) {
      passedLog(shouldBe)
    } else {
      errorLog({ result, shouldBe })
    }
  })
}

console.log('*** Testing your checkIfGreaterThanTen function ***\n')
testYourFunction()
console.log('\n*** Testing your checkIfGreaterThanTen function ends here *** \n')