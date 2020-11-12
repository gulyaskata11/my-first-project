/**
 * Don't be scared about the objects!
 * related doc: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
 * 
 * what you need:
 * -you can reach an object property like this: person.name (will get the name of the person)
 * -you can modify an object propert like this: person.name = 'Donald Trump' (will modify the person's name to Donald Trump)
 * -you should pay attention on the variable scopes
 * -you have to remember how we can escape from a function at a certain point
 * 
 * That is it
 * 
 * Your task is:
 * -extend the addMyName function based on the instructions about objects above
 * -add the proper parameter values to the addMyName function call (it is tricky!!)
 * -add the proper code to the if statement. It should escape from the main function with the text what is in the comment instruction there
 * -the return value should be an OBJECT with the proper name and age what are from the main function parameters!
 */

const playWithObjects = (name, age) => {
    // your first object which ever worked
    // what is my name should not be changed here!
    const person = {
        name: 'what is my name??',
        age: age
    }

    // here you have to create the function which will add the person name to the person and return it
    // is this person in parameter the same person??
    const addMyName = (name, person) => {
        const localPerson = { ...person } // please do not delete this localPerson! You have to return THIS localPerson from this function
        
        return localPerson
    }

    // which two parameters to add to the function to return the proper person object with the proper name from the parent function parameter?
    // please note, that the person const is not used yet, maybe you should consider to use it at some point... :P
    const result = addMyName(/* two parameter values here */ )

    // if the person's name is not string you should return with 'invalid type of name'
    if (typeof result.name !== 'string') {
        // how do you handle it?
        
    }

    return JSON.stringify(result) // You can check what is it but is is not the most important right here
}

module.exports = { playWithObjects }
