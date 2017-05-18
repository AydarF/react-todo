// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));


// var toAdd = [9, 5];
// console.log(add(...toAdd));

/////////////////////////////

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

////////////////////////////

// var person = ['Andrew', 85];
// var personTwo = ['Jen', 54];

// function people (name, age) {
//   return 'Hi ' + name + ', you are ' + age; 
// }

// console.log(people(...person));
// console.log(people(...personTwo));

// OR

// function people (name, age) {
//	console.log('Hi ' + name + ', you are ' + age);
// }
   
// people(...person);
// people(...personTwo);            

///////////////////////////

var names = ['Curtis', 'Reynold'];
var final = ['Vakhtang', ...names];

for (var item = 0 in final) {
	// if (final[item] === 'Curtis') { break; }
  console.log('Hi ' + final[item]);
}

 // OR

final.forEach(function (name) {
  console.log('Hi ' + name);
});

