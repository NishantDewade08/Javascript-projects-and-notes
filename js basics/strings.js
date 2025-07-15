let str = "Nishant Dewade"
let age = 23
let space = "  aman bhay      "
let sks = "sniper"

console.log(str.slice(-12,7));
console.log(str.substring(0,7));
console.log(space.replace("aman", "ND"));
console.log(str.toUpperCase());
//string interpolation
console.log(`my name is ${str} and my age is ${age}`);
console.log(str.split("a"));
console.log(space.trimStart());
console.log(space.trim());
console.log(str.concat(space));
console.log(str.includes("ew"));
console.log(str.indexOf("Dewade"));
console.log(str.padStart(20,sks));
console.log(str.length);
console.log(sks.repeat(5));
console.log(sks.normalize("NFD"));




