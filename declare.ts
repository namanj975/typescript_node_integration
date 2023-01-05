/**
 * *Declare keyword is used for declaring the global variable types or namespaces.
 */
interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
  }
declare function greet(setting: GreetingSettings): void

greet({
    greeting: "hello world",
    duration: 4000
  });
    

let result = myLib.makeGreeting("hello world");
console.log("The computed greeting is:" + result);
let count = myLib.numberOfGreetings;

/**
 * * here we are declaring the global variable myLib.so we didnt error on compile time.
 */
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
  }

/**
 * here we are just declaring the global function getWidget. so that we didn't get any compile time error.
 */
let x: Widget = getWidget(43);
let arr: Widget[] = getWidget("all of them");

type Widget = string;
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

