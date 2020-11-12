const { errorLog, passedLog } = require('./utils')
const { playWithObjects } = require('../learning_tasks')

const testCases = [
    {
        name: 'Joska',
        age: 31,
        shouldBe: JSON.stringify({
            name: 'Joska',
            age: 31
        })
    },
    {
        name: 10,
        age: 3,
        shouldBe: 'invalid type of name'
    },
    {
        name: true,
        age: 3,
        shouldBe: 'invalid type of name'
    },
    {
        name: 'The Dude',
        age: 42,
        shouldBe: JSON.stringify({
            name: 'The Dude',
            age: 42
        })
    }
]

const testYourFunction = () => {
    testCases.forEach((testCase) => {
        const { name, age, shouldBe } = testCase
        const result = playWithObjects(name, age)
        if (result === shouldBe) {
            passedLog(shouldBe)
        } else {
            errorLog({ result, shouldBe })
        }
    })
}

console.log('*** Testing your playWithObjects function ***\n')
testYourFunction()
console.log('\n*** Testing your playWithObjects function ends here *** \n')