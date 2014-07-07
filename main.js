// console.log('Test Runner - If no errors, all asserts passed.');




// $(document).on('ready', function() { 

// ----------- PART 1 ---------
console.log('PART 1------------')

var getName = function(o) {
	return [o.name, o.age]

};

console.log(getName({ name: 'Luisa', age: 25 }) === 'Luisa', 'getName');
// console.log()

console.log(getName({ name: 'Luisa', age: 25 }))




// });

// ----------------   part 2 -------------------

// Solution #1
console.log('PART 2------------')
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

console.log('PART 3------------')
var keyValue = function(key,value){
	// variable o = and object
	var o ={};
	// setting the key in and array to except / Show a value????
	o[key] = value;
	return o

}
//  Passes the first entry to the KEY and the second to the Value of the Key
console.log(keyValue('city', 'Denver'))


//  -------Part 4 --------

console.log('PART 4------------')



var negativeIndex = function(arr,num){

	
	var value = arr.length+num;
	// var value = num+arr.length;


	return arr[value];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

//  -------Part 5 --------

console.log('PART 5------------')




var removeM = function(sansM){

	// var newString = sansM.remove("m")
		
		var output = '';

		for (var i = 0; i < sansM.length; i++) {
			if (sansM[i] !== 'm'){
				output = output + sansM[i]
			}
	};
		return output 


}

console.log(removeM('family'))
console.log(removeM('memory'))





//  -------Part 6 --------

console.log('PART 6------------')


// bringing in the object
var printObject =function(valuepair){

// take the object and strain key from value

for (var key in valuepair){
// go into object now get the value
	// var value = valuepair.key;
	var  value = valuepair[key]
console.log(key + ' is ' + value)
}

	// return the key and the value from an object and printing the result
}

printObject({ a: 10, b: 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops' })

//  -------Part 7 --------

console.log('PART 7------------')



var vowels = function(stuff){

	
	var a = []

	for (var i = 0; i < stuff.length; i++){
			if (stuff[i] === 'a' || stuff[i] === 'e' || stuff[i] === 'i'|| stuff[i] === 'o' || stuff[i] === 'u'){
				a.push(stuff[i])
		}

	}
	return a

}


console.log(vowels('alabama'))
console.log(vowels('What lets in youth?'))

//  -------Part 8 --------

console.log('PART 8------------')


var twins = function(myinput){


	for (var i = 0; i < myinput.length; i++){
			for (var j = 1; j <= i; j++){	
				if ([i] === [j]){
					return true
					}
				else {
					return false
				}


		}
	}

}
//i want to loop thru the entire array of inputs
// then ID if they match in pairs,
// then return true or false values



console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'z']))






