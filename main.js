console.log('Test Runner - If no errors, all asserts passed.');




// $(document).on('ready', function() { 

// ----------- PART 1 ---------
var getName = function(o) {
	return [o.name, o.age]

};

console.log(getName({ name: 'Luisa', age: 25 }) === 'Luisa', 'getName');
// console.log()

console.log(getName({ name: 'Luisa', age: 25 }))




// });

// ----------------   part 2 -------------------

// Solution #1

var totalLetters = function(a){

	var lettersJoined = a.join('')
	return lettersJoined.length

};

// Solution #2

// var totalLetters = function(a){
// 	var count = 0;
	
// 	for (var i=0; i <a.length; i++) {
// 		count += a[i].length;
// 	};

// 	return count;
// };



// calling the function with the info and logging it

console.log(totalLetters(['javascript', 'is', 'awesome']))
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))



//  -------Part 3 --------


var keyValue = function(key,value){
	// variable o = and object
	var o ={};
	// setting the key in and array to except / Show a value????
	o[key] = value;
	return o

}
//  Passes the first entry to the KEY and the second to the Value of the Key
console.log(keyValue('city', 'Denver'))






