var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setName() {
	var myName = prompt('What\'s your name?');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello, ' + myName;
}

if (!localStorage.getItem('name')) {
	setName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
	setName();
}