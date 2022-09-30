/**
 * *A tuple works like an array with some additional considerations:
* * 1) The number of elements in the tuple is fixed.
* * 2)The types of elements are known, and need to be the same.
* * Basically,A tupple is an array with a fixed number of elements whose types are known.
 */

let skill: [string, number];
skill = ['Programming', 5];

/**
 * *the following will throw an error because in tuple order of values is important as each element can have specified type only once
 * * In case below the type of first element of skill array is expected to be string but we are giving number hence it will throw
 * * throw error.
 */
// skill = [5, 'Programming'];

console.log("skills",skill);
let color: [number, number, number] = [255,0,0];
console.log("color",color);

/**
* * Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.
* * In case below typescript compiler will assume the fourth element in headerColor array is optional and type of fourth element is number
*/
let bgColor:[number, number, number, number?] , headerColor: [number, number, number, number?];
bgColor = [0, 255, 0, 67];
headerColor = [0, 255, 255]; // valid because fourth element is optional

headerColor = [0, 255, 255,90]; // valid because second element is optional

// headerColor = [0, 255, 255, "hello"]; // Invalid because the type of fourth element is number if provide and we are giving as string.


export {}

