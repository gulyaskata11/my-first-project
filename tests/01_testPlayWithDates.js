// WTF?!!! Yeah! this will be explained but I know, you are very curious! You can check this if you want to: https://nodejs.org/en/knowledge/getting-started/what-is-require/ this is a server side JS syntax!
const { errorLog, passedLog } = require('./utils')
const { calculateMyAge } = require('../learning_tasks/playWithDates')

// here we will test your function

const testYourMagnificantDateFunction = () => {

  const testCases = [
    {
      input: 2000,
      shouldBe: 20
    },
    {
      input: 1986,
      shouldBe: 34
    },
    {
      input: 1905,
      shouldBe: 115
    }
  ]

  testCases.forEach(testCase => {
    const result = calculateMyAge(testCase.input)
    if (result === testCase.shouldBe) {
      passedLog(testCase.shouldBe)
    } else {
      errorLog({result, shouldBe: testCase.shouldBe})
    }
  })

}

console.log('*** Testing your calculateMyAge function ***\n')
testYourMagnificantDateFunction()
console.log('\n*** Testing your calculateMyAge function ends here *** \n')

