const inputChange = document.querySelector('#font-size-control')
const textField = document.querySelector('#text')

inputChange.addEventListener('input', changeSizeRange);

function changeSizeRange(event) {
   textField.style.fontSize = event.currentTarget.value + 'px'
}
