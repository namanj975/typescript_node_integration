
/**
 * * basic string value declaration and initialization
 */
let firstName: string = 'John';
let title: string = "Web Developer";
let description = `This TypeScript string can 
span multiple 
lines`;

/**
 * * The following will generate error as type number is not assignable to type string 
 */
// description = 78

/**
 * * String interpolation is also allowed in following manner
 */
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile)
