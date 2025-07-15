class User{
    constructor(name, age, id){
        this.name = name
        this.age = age
        this.id = id
    }

    isLoggedIn = true;

    get name(){
        return `the name is ${this._name}`
    }

    // set name(val){
    //     this.name = val
    // }  **maximum call stack size exceed**so always change name in getter-setter func definition by adding underscore(_).

    set name(val){
        this._name = val.toUpperCase();
    }
}

let nishu = new User('nishu', 23, 8);
console.log(nishu.name);
