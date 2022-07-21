/**
 * * basic object value declaration and initialization
 */
let employee: object;
employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);

/**
 * * the type of employee is declared as object so assign it to another type will give an error.
 */
// employee = 'jane'

/**
 * * The following will raise an error as property hireDate doesn't exist in the employee object'
 */
// console.log(employee.hireDate);

/**
 * * For explicitly specify properties of the any object there are two syntax mentioned below
 */

// syntax1
let persons: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

persons = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

// syntax2
let people: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log("firsname is accessible here",people.firstName)
/**
 * * The following will raise an error as type of property firstName doesn't match to the declared type
 */
//  let peoples: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     jobTitle: string;
// } = {
//     firstName: 45,
//     lastName: 'Doe',
//     age: 25,
//     jobTitle: 'Web Developer'
// };

/**
 ** TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.
 ** The object type represents all non-primitive values while the Object type describes the functionality of all objects.
 ** For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.
 */
let obj: Object = {
  age: 67,
};
console.log("here", obj.toString());

/**
 ** TypeScript has another type called empty type denoted by {} , which is quite similar to the object type.
 ** The empty type {} describes an object that has no property on its own. If you try to access a property on such object, TypeScript will issue a compile-time error
 */
let vacant: {};
console.log("vacant", vacant);
// vacant.firstName = 'John'

let empty: {} = {};
empty = 45;

console.log(empty,empty.toString());

let obj2 : Object

/**
 * * The following will not raise an error at compile time obj2 type is Object so typescript allows obj2 to fetch object properties but at runtime
 * * following willl give an error because obj2 value is undefined and we are acessing properties of undefined.
 */

console.log("obj2", obj2.toString());