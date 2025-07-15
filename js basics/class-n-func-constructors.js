class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    getDetails(){
        console.log(`users name is ${this.username}, and his email: ${this.email}`);
    }
}

const nishant = new User('nishant', 'nishant@fb.in', '3200')
nishant.getDetails()
console.log(nishant.password);

// method only used for this(nishant) instance
nishant.myEmail = function(){
    console.log(this.email);
}
// nishant.myEmail();

// User.myEmail = function(){
//     console.log(this.email);
// }   ** we cant do this - Not a function error**

// this method will be used for all instances as it is set to prototype
User.prototype.getName = function(){
    console.log(this.username);   
}

const hitesh = new User('hitesh')
hitesh.getDetails()
hitesh.getName()


//---------------------------------------------------------------------------------

function UserByFunc(username, age, email) {
    this.username = username
    this.age = age
    this.email = email

    this.getDetails = function(){
        console.log(`my name is ${this.username}. I'm ${this.age} years old.`);
    }
}

UserByFunc.prototype.getHisName = function(){
    console.log(`his name is ${this.username}`);
}

// Object.prototype.getHisName = function(){
//     console.log(`his name is ${this.username}`);
// }   **this will also work for all instances of function because of prototypal-Inheritance**

const dewade = new UserByFunc('dewade', 23, 'dew20@tcs.com')
dewade.getDetails()
console.log(dewade.age);

dewade.getHisName()
//---------------------------------------------------------------------------------

