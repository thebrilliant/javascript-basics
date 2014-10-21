// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";

var person = {
	fName: 'Viv',
	lName: 'W',
	email: 'type here',
	getFullName: function() { return this.fName + ' ' + this.lName}
};

//NEVER EVER use alert
//alert(person.getFullName());
console.log('running the getFullName function on person');
console.log(person.getFullName());

console.log('looping through all properties of person');
//show all properties of the person object
for (var prop in person) {
	console.log(person[prop]);
};

//create a new image element
var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture of an awesome and adorable cat';

//add this element to the top of the body
document.body.insertBefore(kitty, document.body.firstChild);

//create new element again
var dog = document.createElement('img');
dog.src = 'img/dog.jpg';
dog.alt = 'picture of a cute puppy';

//add this to the body of the page
document.body.appendChild(dog);

function onPuppyClick {
	//alert('you clicked my puppy!');
	document.getElementById('bark').play;
}

var elem = document.getElementById('puppy-pic');

if (elem.addEventListener) {
	elem.addEventListener('click', onPuppyClick);
else if (elem.attachEvent) {
	elem.attachEvent('click', onPuppyClick);
}

document.addEventListener('DOMContentLoaded', function() {
	//
});