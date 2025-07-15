class Animal{
    constructor(name){
        this.name = name
    }

    isAlive = true;

    eats(){
        console.log(`Animal eats Everything`);
    }

    speaks(){
        console.log(`Animals speaks differently`);        
    }

    static drinks(){
        console.log(`All animals drink water`);       
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }

    eats(){
        super.eats()
        console.log(`Dog eats meat, milk, pedigree, etc`);        
    }

    speaks(){
        console.log(`${this.name} barks`);        
    }

    getDetails(){
        console.log(`Dogs name is ${this.name}, his breed is ${this.breed}`);        
    }
}

let bunny = new Dog('bunny', 'Syberian Husky')
bunny.eats()
bunny.speaks()
bunny.getDetails()
if(bunny.isAlive){
    console.log(`${bunny.name} is Alive`)
}
Dog.drinks()
