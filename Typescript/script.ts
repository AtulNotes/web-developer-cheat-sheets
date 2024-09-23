// Basic Types
let isDone: boolean = false;
let age: number = 30;
let firstName: string = "John";
let list: number[] = [1, 2, 3];

// Tuple
let tuple: [string, number];
tuple = ["hello", 10];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Functions
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "Doe" };

console.log(greeter(user));

// Union Types
let union: string | number;
union = "hello";
union = 42;

// Intersection Types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

let response: ArtworksResponse = {
    success: true,
    artworks: [{ title: "Mona Lisa" }]
};

// Literal Types
let literal: "hello" | "world";
literal = "hello";

// Type Aliases
type StringOrNumber = string | number;
let alias: StringOrNumber;
alias = "hello";
alias = 42;
// Type Guards
function isString(value: any): value is string {
    return typeof value === "string";
}

let someValue2: StringOrNumber = "hello";
if (isString(someValue2)) {
    console.log(someValue2.toUpperCase());
} else {
    console.log(someValue2);
}

