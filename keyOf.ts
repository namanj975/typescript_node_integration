/*
 * * The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y” and type p1 is the same type as “z” | “y”
 */
type Point = { x: number; y: number };
type P = keyof Point;
var t: P = "x";

interface Point1 {
  z: number;
  y: number;
}
type p1 = keyof Point1;
var b: p1 = "z";
// The following will raise an error.
// t =90

/**
 * *If the type has a string or number index signature, keyof will return those types instead:
 * * like in the following
 */
type Arrayish = { [n: number ]: unknown };
type A = keyof Arrayish;

// The following will raise an error because var y is of type number;
//  var y  : A  = "true"
/*
 * * Note that in the below example,
 * *M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
 */
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
