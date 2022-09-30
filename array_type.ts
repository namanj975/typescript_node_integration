/**
 * * basic array  declaration and initialization of string type.
 */
let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design'); // valid operation 
 
console.log("here skills",skills)

/**
 * * the following will raise an error because we are assigning the value of number type instead of string.
 */
// skills[3] = 90;

/**
 * * In this case TypeScript infers the hobbies array as an array of strings.
 */
let hobbies = ['Problem Sovling','Software Design','Programming'];

// hobbies = 90 // Invalid 
// hobbies[3] = true // Invaid because type 'boolean' is not assignable to type 'string'

let skill = skills[0];
console.log("skill type",typeof (skill ))

/**
 * * In this case an error will be raised as from above TypeScript infers the type of skill as string.
 * * so if we assign any value of type other than that of skill it will generate error.
 */
// skill = 90 

let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
console.log("doubleit",doubleIt);

// doubleIt[3] = "naman" // invalid as type of doubleIt variable is already inferred by typescript from above statements as number[]

/**
 * * basic array of mixed type declaration and initialization. In this case scores array elements can only have type string and number
 */
let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 

let marks : (string | object)[];
/**
 * * the following line will raise an error as type object doesn't  allow any other primitive values. so in this case marks can be array of only string and type object.
 */
// marks = ['Programming', 5, 'Software Design', 4];

marks = ['Programming', {} , 'Software Design', [9]];



let finalScores = ['Programming', 5, 'Software Design', 4]; 

/**
 * * the following line will raise an error as type of finalScores inferred by typescript as type (string | object)[] and we are assigning 
 * * {} as finalScores element  
 */
// finalScores[5] = {}

