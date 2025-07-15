// this will return property descriptor of given object
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// Object.defineProperty(Math, 'PI', {
//     writable: true,
//     configurable: true
// })

// Math.PI = 5
// console.log(Math.PI);

let nishant = {
    name: 'Nishant Dewade',
    age: 23,
    email: 'nishant@gmail.com',
    edu: 'BE Comp',
    address: 'Dhalewadi'
}

// for(let key of Object.entries(nishant)){
//     console.log(key);
// }
for(let key in nishant){
    console.log(key +' : '+ nishant[key]);
}

//If there is given property already defined it will change its properties as specified.
//If not defined then it will add new property to object as specified.
Object.defineProperty(nishant, 'age', {
    value: 23,
    enumerable: false,
    writable: false,
    configurable: true
})

console.log('after adding property descriptor:');

nishant.age = 20  // it will not update
console.log(nishant.age);


for(let key in nishant){
    console.log(key +' : '+ nishant[key]);
}
