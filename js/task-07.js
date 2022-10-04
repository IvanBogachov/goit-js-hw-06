const inputChange = document.querySelector('input#font-size-control')
const textField = document.querySelector('span#text')

inputChange.addEventListener('input', changeSizeRange)

function changeSizeRange(event) {
   textField.style.fontSize = `${event.target.value}px`
}
