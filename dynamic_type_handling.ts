interface Product {
  id: number;
  name: string;
  price: number;
}

/**
 * * In this we have declared Product as a return type of this function.
 * @param  {} id
 * @returns Product
 */
function getProduct(id: any): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
const product = getProduct(1);

  // console.log(`The product ${product.Name} costs $${product.price}`); // This will show error on compile time as property name does not exist in type product interface.
console.log(`The product ${product.name} costs $${product.price}`);

/**
 * * In this we have declared explicitly the type of arguments passed. 
 * @param  {string} name
 * @param  {number} price
 */
const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs ${price}$.`);
};

/**
 * * this will show error when you pass the arguments of the wrong types to the showProduct() function.
 */
//  showProduct(product.price, product.name);

 showProduct( product.name , product.price) ;

 let usernames: string[] = ["shubham","rahul"];

/**
 * * this will show error at compile time as we assigning array of numbers instead of strings.
 */
//  usernames = [34,45]

let person: {
    name: string;
    age: number
 };
 
 person = {
    name: 'John',
    age: 25,
 }; // valid

//  person = {
//     name: 'John',
//     age: 25,
//     size : 34
//  }; // not valid 

// annonating function type to variable greeting
let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
}

/**
 * * The following causes an error because the function that is assigned to the greeting variable doesn’t match with its function type.
 */
// greeting = function () {
//     console.log('Hello');
//     return 23
// };

let counter = 0;
/**
 * * The following causes an error because the typescript compiler automatically infers the type of variable counter as number.so when you assign it to the string it will generate error.
 */

// counter = "ss"


function setCounter(max=100) {
  console.log("set counter method");
}

/**
 * * The following causes an error because the typescript compiler automatically infers the type of function setCounter parameter max as number
 */
// setCounter("nsmn")


function increment(counter: number) : number {
  return counter++;
}

/**
 * * The following code will raise an error as below function return type mentioned is number but we are returning string hence the compiler will raise an error.
 */
// function increment2(counter: number) : number {
//   var str = "return string";
//   return str;
// }

/**
 * * In this case, TypeScript selects the number array type (number[]) as the best common type.
 */
let items = [1, 2, 3, null];

/**
 * * In this case, we are adding string type to array items hence typescript compiler will throw an error.
 */

// items[items.length] = "string"


// TypeScript will infer the type for the itemsList as an array of numbers and strings: (number | string)[]
let itemsList = [0, 1, null, 'Hi'];

/**
 * * In this case, we are adding boolean type to array itemsList hence typescript compiler will throw an error.
 */
// itemsList[itemsList.length] = true

