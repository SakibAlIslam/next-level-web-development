class Animal {
  // public name: string;
  // public species: string;
  // public sound: string;

  //parameter properties...
  //ts compiler will do this work... type initalize and declare in a single code base....
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  // constructor(public name: string, public species: string, public sound: string){
  //     // this.name = name;
  //     // this.species = species;
  //     // this.sound = sound
  // }

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shefard", "Dog", "Gheu Gheu");
dog.makeSound();
const cat = new Animal("Persian", "Cat", "Meaw Meaw");
cat.makeSound();
