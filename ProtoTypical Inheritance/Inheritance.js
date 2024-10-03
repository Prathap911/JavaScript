//1. Create a base object Animal and derive Dog and Cat objects from it. Include methods that demonstrate inheritance.
//2. Add a method to the base class that all derived classes must implement.

class Animal{
    constructor(name,species){
        this.name=name;
        this.species=species;
    }
makeSound(){
    console.log(`${this.name} makes a sound`);
}
describe(){
    throw new error("descibe method must be implemented by derived class");
}

}

class Dog extends Animal{
  constructor(name){
    super(name,"Dog"); // Call the parent constructor with 'Dog' as species
}

  makeSound(){
    console.log(`${this.name} barks`);
  }

  describe(){
    console.log(`${this.name} is a loyal dog`);
  }
}


class Cat extends Animal {
    constructor(name) {
      super(name, "Cat"); // Call the parent constructor with 'Cat' as species
    }
  
    // Overriding makeSound method
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  
    // Implementing the describe method
    describe() {
      console.log(`${this.name} is an independent cat.`);
    }
  }


  const myDog= new Dog("Buddy");
    myDog.makeSound();    // Buddy barks.
    myDog.describe();     // Buddy is a loyal dog.

    const myCat = new Cat("Whiskers");
    myCat.makeSound();    // Whiskers meows.
    myCat.describe();     // Whiskers is an independent cat.

    // Trying to create an Animal directly will cause an error if describe() is called
const genericAnimal = new Animal("SomeAnimal", "Unknown");
// genericAnimal.describe(); // Error: Describe method must be implemented by derived classes