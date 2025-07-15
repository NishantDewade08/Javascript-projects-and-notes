//lets learn JS arrays with some notes

let nums = [1,2,3,4,5,6,7,8,9,0]
let alpha = ['a','b','c','d']
let mixed = [22, 34, 78, [2, 4, 6], 'nd', true]
let marvel = new Array()
let dc = new Array(4)

//------------------------------------methods on arr----------------------------------------------

marvel.push('thor') //appends element to end of array (can take 1 or more args)
marvel.push('ironman', 'hawk-eye')
marvel.push('krish')
marvel.unshift('hulk', 'vision') //adds element to start of array (can take 1 or more args)
marvel.unshift('shaktiman')
//console.log(marvel);
marvel.shift() //removes ele from start
marvel.pop() //removes ele from end
//console.log(marvel);
//console.log(marvel.length);
dc[1] = 'aqaman'
dc.push('superman', 'batman', 'deadpool', 'wolverine')
//console.log(dc);
let heros1 = marvel.concat(dc)
let heros2 = {...marvel, ...dc} //spread operator- spreads ele's from all spe. arrays or string and create a new array
//console.log(heros1);
//console.log(heros2);
let str = alpha.join('-') //returns a string of array ele's by separating ele with spe. separator
let str2 = nums.toString() //not modifies original array. return string representation of array as(1,2,3,4)
// console.log(typeof str2);
// console.log(str2);
// console.log(nums);

// console.log(str);
// console.log(typeof alpha);
// console.log(alpha);
let num2 = nums.slice(2,5) // does not modifies original array, returns spe. elements(excluding 5th element)
//console.log(num2);
nums.splice(2,4) //modifies original array by removing spe. elements(including 4th element)
//console.log(nums);
let mixed2 = mixed.flat(2)
//console.log(mixed2);
mixed2.reverse()
//console.log(mixed2);
heros1.fill('x-man', 4, heros1.length-1)
//console.log(heros1);
nums.sort()
// console.log(nums);
// console.log(nums.at(3));
// console.log(nums.indexOf(9));
// console.log(nums.includes(9));

/*
alpha.forEach(function (ch){
    console.log(ch + "-x");
})

for(let ch of alpha){
    console.log(ch + " fck you");
}
*/
//--------------------------------------methods on Array object-------------------------------------

let boys = ['roy', 'sam', 'nick', 'john', 'jimmy', 'tom']
let arr = [2,55,67,0,3,7,87,45,23]
let nd = "nishantdewade"

let me= Array.from(nd) // array from any one iterable obj
//console.log(me);
let arr2=Array.of(boys, arr, nd) //create array of string/arrays specified(nested array)
let arr3=Array.of(2,4,6,8) // create array from these nums
//console.log(arr2);
console.log(Array.isArray(boys));

//----------------------------------------the end----------------------------------------------------