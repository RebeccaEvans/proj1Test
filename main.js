let displayBox = document.getElementById('count').innerText
let displayBoxValue = parseInt(displayBox, 10)
let minusButton = document.querySelector('.minus')
let plusButton = document.querySelector('.plus')
let inputBox = document.getElementById('input-box').value
let sum = 0

function updateValue() {
	inputBox = document.getElementById('input-box').value
}

plusButton.addEventListener('click', () =>{
	inputBox = document.getElementById('input-box').value
	let inputBoxValue = parseInt(inputBox)
	let newSum = sum + inputBoxValue
	sum = newSum
	if (sum<0) {
		document.querySelector('.display').style.color= 'red'
		document.getElementById('count').innerText = `${sum}`
	}
	else {
		document.querySelector('.display').style.color= 'black'
		document.getElementById('count').innerText = `${sum}`
	}
})
minusButton.addEventListener('click', () =>{
	inputBox = document.getElementById('input-box').value
	let inputBoxValue = parseInt(inputBox)
	let newSum = sum - inputBoxValue
	sum = newSum
	if (sum<0) {
		document.querySelector('.display').style.color= 'red'
		document.getElementById('count').innerText = `${sum}`
	}
	else {
		document.querySelector('.display').style.color= 'black'
		document.getElementById('count').innerText = `${sum}`
	}
	
})

