/**
 * *Type compatibility in TypeScript is based on structural subtyping. Structural typing is a way of relating types based solely on their members.
 * *This is in contrast with nominal typing.
 * *Consider the following code:
 */

interface Pet {
  name: string;
}
class Dog {
  name: string;
}
let pet: Pet;
// OK, because of structural typing
pet = new Dog(); // In this only instatnce properties of class Dog is checked for compatibility purpose.

/**
 * TypeScript’s structural type system was designed based on how JavaScript code is typically written. Because JavaScript widely uses anonymous objects like function expressions and object literals, it’s much more natural to represent the kinds of relationships found in JavaScript libraries with a structural type system instead of a nominal one.
 */

/**
 * * The basic rule for TypeScript’s structural type system is that x is compatible with y if y has at least the same members as x.
 * * For example consider the following code involving an interface named Pet which has a name property:
 */
/**
 * * To check whether dog can be assigned to pet, the compiler checks each property of pet to find a corresponding compatible property in dog.
 * *In this case, dog must have a member called name that is a string. It does, so the assignment is allowed.
 */

let pet2: Pet;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
pet2 = dog;

/**
 * * The same rule for assignment is used when checking function call arguments:
 * *Note that dog has an extra owner property, but this does not create an error. Only members of the target type (Pet in this case) are considered when checking for compatibility.
 * *This comparison process proceeds recursively, exploring the type of each member and sub-member.
 */
let dog2 = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog2); // OK
