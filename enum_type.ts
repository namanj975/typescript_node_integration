/**
 * * A basic enum  declaration and initialization of enumerated type.
 * * The following example creates an enum that represents the months of the year.
 * * A basic syntax of enum declaration is: enum name {constant1, constant2, ...}; ,
 * * where constant1, constant2, etc., are also known as the members of the enum
 */
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

export function isItSummer(month: Month): boolean {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

/**
 * * By the Following log we see the structure of Month enum
 * * following code runs in background on run time by typescript compiler for Month enum 
 * * 
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
 */
console.log("month", Month);
/*
 * * structure of Month enum in the system is as following:
 {
  '0': 'Jan', 
  '1': 'Feb', 
  '2': 'Mar', 
  '3': 'Apr', 
  '4': 'May', 
  '5': 'Jun', 
  '6': 'Jul', 
  '7': 'Aug', 
  '8': 'Sep', 
  '9': 'Oct', 
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,     
  Feb: 1,     
  Mar: 2,     
  Apr: 3,     
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
* * As you can see clearly from the output, a TypeScript enum is an object in JavaScript. This object has named properties declared in the enum. For example, Jan is 0 and Feb is 1.
* * The generated object also has number keys with string values representing the named constants.
* * That’s why you can pass a number into the function that accepts an enum. In other words, an enum member is both a number and a defined constant.
 */

console.log("hii", isItSummer(Month.Jun));
console.log("test", Month.Jan, Month.Feb, Month.Mar, Month.Apr, Month["2"]);

/**
 * * TypeScript defines the numeric value of an enum’s member based on the order of that member that appears in the enum definition. For example, Jan takes 0, Feb gets 1, etc.
 * *It’s possible to explicitly specify numbers for the members of an enum like this:
* * In this example, the Jan constant value takes 0 Feb takes 1, and the Mar takes 10 Apr takes 11 and so on. 
*/

enum Month_2 {
  Jan,
  Feb,
  Mar = 10,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

console.log("here 2", Month_2);


enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

console.log("r",request);

/**
* * Summary
* A TypeScript enum is a group of constant values.
* Under the hood, an enum a JavaScript object with named properties declared in the enum definition.
* Do use an enum when you have a small set of fixed values that are closely related and known at compile time.

 */
