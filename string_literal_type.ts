/**
 * * The string literal types allow you to define a type that accepts only one specified string literal.
 */

 let click: 'click';

 console.log("c",click.toString());

 /**
  * * Now ,the variable click is a string literal type that accepts only the string literal 'click'.
  * * If you assign the literal string click to the click, it will be valid:
  */

  click = 'click'; // valid

  /**
   * * However, when you assign another string literal to the click, the TypeScript compiler will issue an error.
   * * For example:
   */

//   click = 'dblclick'   // Invalid 

/**
 * *The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable:
 */

 let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
 mouseEvent = 'click'; // valid
 mouseEvent = 'dblclick'; // valid
 mouseEvent = 'mouseup'; // valid
 mouseEvent = 'mousedown'; // valid
//  mouseEvent = 'mouseover'; // compiler error


/**
* *If you use the string literal types in multiple places, they will be very verbose.
* *To avoid this, you can use the type aliases. For example:
 */

type mouse_event = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouse_event: mouse_event;
mouse_event = 'click'; // valid
mouse_event = 'dblclick'; // valid
mouse_event = 'mouseup'; // valid
mouse_event = 'mousedown'; // valid
// mouse_event = 'mouseover'; // compiler error (Invalid syntax)

/**
 * *now we can assign mouse_event type to another variable. This avoids providing all string literal types again.
 * *for example in following.
 */
let anotherEvent: mouse_event;  
anotherEvent = 'click'
// anotherEvent = 'clicked' // Invalid so compiler error

/**
* * Summary 
* * Use the string literal types with union types and type aliases to define types that accept a finite set of string literals.
 */

