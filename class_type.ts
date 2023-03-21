/**
 * *Classes work similarly to object literal types and interfaces with one exception: they have both a static and an instance type. When comparing two objects of a class type, only members of the instance are compared.
 * * Static members and constructors do not affect compatibility.
 */

class Animal {
  static displayName = "snake";
  feet: number;
  type = "mammal";
  constructor(name: string, numFeet: number) {}
}
class Size {
  static displayName = 12;
  feet: number;
  type = "Qantity";
  constructor(numFeet: number) {}
}
let a: Animal;
/**
 ** The following console statement will raise an error on run time because in above statement we have only declared the type of variable a as of class Animal.
 ** we haven't intantiated the same hence aceesing the instatnce properties of class Animal without instantiating it will raise an error.
 */

// console.log("class here ", a.type);
let s: Size;
a = s; // OK
s = a; // OK

// The below assignment works fine because TS compiler will only check for instance properties of object declared in class.
a = {
  feet: 12,
  type : "any"
};

export { Animal };
