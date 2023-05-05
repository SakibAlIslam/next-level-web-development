class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Person{
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student('Sakib', 27, 'Dhaka');

console.log(student1.makeSleep(7))

class Teacher extends Person{
  designation: string; //diff

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numberOfClass: number): string {
    //diff
    return `This ${this.name} will take ${numberOfClass} classes weekly`;
  }
}

const teacher1 = new Teacher('Rabbil', 40, 'Dhaka', 'Senior Lecture');
console.log(teacher1.makeSleep(5))
console.log(teacher1.takeClasses(2))