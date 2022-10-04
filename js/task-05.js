const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')


textInput.addEventListener('input', onInputChange)

function onInputChange(event) { 
  output.textContent = event.target.value

  if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
}