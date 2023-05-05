// ! key of guard, working on runtime cause it will work when ts convert to js, cause this key of guard also used on JS...
type AlphaNeumerics = string | number;
function add (param1: AlphaNeumerics, param2: AlphaNeumerics) : AlphaNeumerics {
    if (typeof param1 == 'number' && typeof param2 == 'number') {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString();
    }
}

add(1,2)
add('1','2')


// ! In Guard //usage for object...
type NormalUserType = {
    name: string;
}
type AdminUserType = {
    name: string;
    role: 'admin'
}

const normalUser1 : NormalUserType = {
    name: 'Sakib'
};

const adminUser1 : AdminUserType = {
    name: 'Mr. Boss',
    role: 'admin'
}

function getUser(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return `This is ${user.role}`
    } else {
        return `This is ${user.name} - Normal User`
    }
}

// console.log(getUser(adminUser1));




// ! intance of guard// using for class and object
class AnimalGuard {
    nameGuard: string;
    speciesGuard: string;

    constructor(name: string, species: string) {
        this.nameGuard= name;
        this.speciesGuard= species
    }

    makeSound(){
        console.log(`I am making sound`)
    }
}

class Dog extends AnimalGuard{
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark() {
        console.log('I am barking'); //diff
    }
}

class Cat extends AnimalGuard{
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMeaw() {
        console.log('I am Meawing'); //diff
    }
}

const animal1 = new Dog('German Shephard', 'Dog') //instance of Dog Class
const animal2 = new Cat('Persian', 'Cat') //instance of Cat Class

//usage of 'is' syntax....
function isDog(animal: AnimalGuard): animal is Dog {
    return animal instanceof Dog;
}

function isCat(animal: AnimalGuard): animal is Cat {
    return animal instanceof Cat;
}

function getAnimal(animal: AnimalGuard): string {
    if (isDog(animal)) {
        return `${animal.makeBark()}`
    } else if (isCat(animal)) {
        return `${animal.makeMeaw()}`
    }
     else {
        return `${animal.makeSound}`
    }
}

getAnimal(animal2);