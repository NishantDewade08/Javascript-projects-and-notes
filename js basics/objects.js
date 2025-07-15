//lets learn JS objects with some notes

//------------------------------------------creating object------------------------------------------
const user= {
    name: 'nishant',
    "full name": "Nishant Navnath Dewade",
    age: 23,
    email: "nishant@gmail.com",
    isLoggedIn: true,
    greeting: function(){
        console.log(`hello guys, this is ${this.name}, my age is ${this.age}`);
    }
}
// console.log(user.greeting());

let mySym = Symbol("key1")

let course = {
    courseName: "javascript",
    courseInstructor: "histesh choudhary",
    fees: 999,
    [mySym]: "mykey1",
    courseDays: ['mon', 'wed', 'fri', 'sat'],
    details: {
        ownerDetails: {
            ownerName: 'hitesh',
            companyName: 'chai aur code'
        },
        content: {
            types: ['tutorials', 'exercises', 'practice']
        }
    },
    link: "https://youtube.com/chai-aur-code/js-hindi"
}
// console.log(course.details.content.types[1]);

let jsUser = new Object(); //creates singleton object

jsUser.name = 'rushi'
jsUser.job = 'SDE'
jsUser["salary"] = 45000
// console.log(jsUser);
jsUser.hello = function () {
    console.log(`js user name is ${this.name} and his job is ${this.job}`);
}
// jsUser.hello();


//-------------------------------------using object's static methods--------------------------------------

let target = Object.assign({}, user, course)

let obj1 = {...user, ...jsUser}

// console.log(Object.getOwnPropertyNames(obj1));
// console.log(Object.getOwnPropertyDescriptor(obj1));
// console.log(Object.keys(course));
// console.log(Object.values(course));
// console.log(Object.entries(course));
// console.log(Object.getPrototypeOf(course));
Object.freeze(obj1)
Object.seal(user)
// console.log(Object.hasOwn(user, "isLoggedIn"));
// console.log(Object.is(user, obj1));
// console.log(Object.isExtensible(jsUser));
// console.log(Object.isFrozen(obj1));
// console.log(Object.isSealed(user));
user.password = "nd123" //new property cannot be added
user.name = 'nd-20' // existing property can be modified
// console.log(user);

// for(let key in user){
//     console.log(key + ": "+ user[key]);  
// }
