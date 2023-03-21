/**
 * * Interface declaration syntax.
 * * Here we use an interface that describes objects that have a firstName and lastName field.
 * * An interface declaration is another way to name an object type.
 */
export default interface Person {
  firstName: string;
  lastName: string;
}

/**
 * * Assigning the type of user variable to Person interface.
 */
let user: Person = { firstName: "Jane", lastName: "User" };

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

function greeter(person: Person): string {
  let msg: string = "Hello, " + person.firstName + " " + person.lastName;
  console.log("greeting message -->", msg);
  return msg;
}

let student: Student = new Student("Naveen", "kumar", "jain");
console.log("student details", student);
greeter(student);

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("printCoord method called");
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Re-assigning the property values of object whose type is interface. we can restrict this re-assigning of variable by declaring the property as readonly.
let point: Point = { x: 100, y: 90 };
point.x = 89;
/**
 * * The following statement will raise an error because printCoord method is expecting an arguement of type Point(Interface) and in Point interface property 'z' is not defined.
 */
// printCoord({ x: 100, y: 100, z:19 });   // Invalid

/**
 * * Optional properties.
 * * we can also define properties which are optional.
 * * In the below example properties color and width are optinal.
 * * Each optional property denoted by a ? at the end of the property name in the declaration of an interface.
 * * Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all.
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black", width: 90 });

/**
 * The following statement is invalid and raise an error because the property shape doesn't exist in the SquareConfig interface.
 */
// let mySquare = createSquare({ color: "black",shape : "square" }); // Invalid

/**
 * * Readonly properties
 * *Some properties should only be modifiable when an object is first created.
 * *You can specify this by putting readonly before the name of the property
 */

interface Coordinate {
  readonly x: number;
  readonly y: number;
}

let p1: Coordinate = { x: 10, y: 20 };

/**
 * * The following statement is invalid and throws an error because we cannot re-assign the value to property 'x' beacuse it is readonly.
 */
// p1.x = 5; // Invalid!
/**
 * * Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
 * *Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
 */

/**
 * * Extending an interface as shown in below example.
 */

interface Animal {
  name: string;
}
// Adding new properties to existing interface
interface Animal {
  height: string;
}
interface Bear extends Animal {
  honey: boolean;
  color?: string;
}

let bear: Bear = { name: "polo", honey: true, color: "black", height: "3.5" }; // valid

/**
 * * extending type via intersection
 */
type Animals = {
  name: string;
};

type Bears = Animals & {
  honey: boolean;
};

let bears: Bears = { honey: true, name: "naman" };
// let bears : Bears = {honey : true,color: "brown" name : "naman"} // Invalid

interface Pet {
  name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog); // OK
