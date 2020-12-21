const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const button = document.getElementById("button")
const other = document.getElementById("other")
//const answer = confirm("Do you want to write the value?")

function clickButton() {
    if (!input1.value) {
        alert('The name is required!')
        return
    }
    if (!input2.value) {
        alert('The nickname is required!')
        return
    }
    if (!input3.value) {
        alert('The date is required!')
        return
    }
    other.innerText = `${input1.value} (${input2.value}) was born in ${input3.value}`
}

button.addEventListener('click', clickButton)