// write some code here to show all i need to know so that i can use typescript start with data type and syntax

// 1. Data Types

// 1.1. Boolean

let isDone: boolean = false;

// 1.2. Number

let decimal: number = 6;

// 1.3. String

let color: string = "blue";

// 1.4. Array

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// 1.5. Tuple
// explain this data type

let x: [string, number];

x = ["hello", 10];

// 1.6. Enum

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;

// 1.7. Any

let notSure: any = 4;

notSure = "maybe a string instead";

notSure = false;

// 1.8. Void

function warnUser(): void {
  console.log("This is my warning message");
}

// 1.9. Null and Undefined

let u: undefined = undefined;


let n: null = null;

// 1.10. Never

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
  }
}

// 1.11. Object

declare function create(o: object | null): void;

create({ prop: 0 });

create(null);

// 2. Variable Declarations

// 2.1. var

var a = 10;

// 2.2. let

let b = 20;

// 2.3. const

const numLivesForCat = 9;

// 3. Interfaces

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };

printLabel(myObj);

// 4. Classes

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter

greeter = new Greeter("world");

console.log(greeter.greet());

// 5. Functions

function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y;
};

// 6. Generics

function identity<T>(arg: T): T {
  return arg;
}

let output

output = identity<string>("myString");

output = identity("myString");

// 7. Advanced Types    

// 7.1. Union Types

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 7.2. Type Guards

function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft2(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 7.3. Type Aliases

type Name = string;

type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// 7.4. String Literal Types

type Easing = "ease-in" | "ease-out" | "ease-in-out";

function animate(easing: Easing) {
  // ...
}

animate("ease-in");

// 7.5. Numeric Literal Types

// function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
//   // ...
// }

// 7.6. Discriminated Unions

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

// 7.7. Index Types

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Jarid",
  age: 35
};

let strings: string[] = pluck(person, ["name"]);

// 7.8. Mapped Types

interface PersonPartial {
  name?: string;
  age?: number;
}

interface PersonReadonly {
  readonly name: string;
  readonly age: number;
}

// 7.9. Polymorphic this types

class BasicCalculator {
  public constructor(protected value: number = 0) {}

  public currentValue(): number {
    return this.value;
  }

  public add(operand: number): this {
    this.value += operand;
    return this;
  }

  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

let v = new BasicCalculator(2)
  .multiply(5)
  .add(1)
  .currentValue();

// 7.10. Index types and index signatures

function pluck2<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

// 7.11. Keyof Type Operator

interface Person2 {
  name: string;
  age: number;
}

let personProps: keyof Person2;

// 7.12. Lookup Types
