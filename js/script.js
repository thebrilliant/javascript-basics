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
var elem = document.createElement('img');
elem.src = 'img/cat.jpg';
elem.alt = 'picture of an awesome and adorable cat';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);

//create new element again
var dog = document.createElement('img');
dog.src = 'img/dog.jpg';
dog.alt = 'picture of a cute puppy';

//add this to the body of the page
document.body.appendChild(dog);