const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const button = document.getElementById("button")
const answer = confirm("Do you want to write the value?")

function clickButton() {
    if (answer) {
        alert(`${input1.value} (${input2.value}) was born on ${input3.value}`)    
    } else {
        alert("Undefined")
    }
}

button.addEventListener('click', clickButton)