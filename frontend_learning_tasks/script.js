// exercise: As you can see the PUT button pu the text from the input field into the disabled textarea.
// You should achive that the CLEAR button delete the text area content, then show an alert with the text: "CONTENT DELETED"

// You can play also with the css things.
// How you can make a pointer cursot when it is over the buttons?
// https://www.w3schools.com/cssref/sel_hover.asp

const textInput = document.getElementById('textinput')
const textOutput = document.getElementById('output')
const myButton = document.getElementById('mybutton')

myButton.addEventListener('click', () => {
    console.log(textInput.value)
    textOutput.value = textInput.value
})