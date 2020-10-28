// WTF?!!! Yeah! this will be explained but I know, you are very curious! You can check this if you want to: https://nodejs.org/en/knowledge/getting-started/what-is-require/ this is a server side JS syntax!
const calculateMyAge = require('../learning_tasks/playWithDates')

// here we will test your function

const testYourMagnificantDateFunction = () => {
  console.log('*** Testing your calculateMyAge function ***')
  const iAmTwenty = calculateMyAge(2000)
  const iAmThirtyFour = calculateMyAge(1986)
  const iAmHundredAndFifteen = calculateMyAge(1905)

  if (iAmTwenty !== 20) throw new Error('iAmTwenty should be 20')
  console.log(`✔️ ${iAmTwenty}`) // should be 20

  if (iAmThirtyFour !== 34) throw new Error('iAmThirtyFour should be 34')
  console.log(`✔️ ${iAmThirtyFour}`) // should be 34

  if (iAmHundredAndFifteen !== 115)
    throw new Error('iAmHundredAndFifteen should be 115')
  console.log(`✔️ ${iAmHundredAndFifteen}`) // should be 115
}

try {
  testYourMagnificantDateFunction()
} catch (error) {
  console.log('\x1b[31m', `Error: ${error.message}`)
}
