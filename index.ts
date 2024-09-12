let id: number = 5
let company: string = 'Asadullohs'
let isPublished: boolean = true


// anything
let x: any = "hello"
// anything

let ids: number[] = [1, 2, 3, 4, 5, 6]
let arr: any[] = [1, 'Hello', true]



// Tuple
let person: [number, string, boolean] = [1, 'Asadulloh', true]


// Tuple array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Brad'],
    [3, 'Brad'],
]



// Union
let idm: string | number 
idm = '22'



// Enum
enum direction1 {
    Up,
    Down,
    Left,
    Right
}

enum direction2 {
    Up = 'Up',
    Down ="Down",
    Left = "Left",
    Right = "Right"
}

console.log(direction1.Up)


// Objects
type User = {
    id: number,
    name: string
}

const user: User= {
   id: 1,
   name:"John"
}




// Type Assertion
let cid: any = 1
// let customerId = <number>id
let customerId = cid as number



// Functions
function addNum(x: number, y:number): number{
    return x + y
}

console.log(addNum(1,10))

// Void
function log(message:string | number):void{
    return console.log("Asadulloh")
}
log('hello')



// InterFaces

interface USerInterFace{
    id:number
    name:string
    age?:number
}

const user1: USerInterFace = {
    id: 1,
    name:'Asadulloh is the most powerful person in the world',
}

user1.id = 5


// Interface function
interface mathFunc {
    (x: number, y:number):number
}

const add: mathFunc = (x:number, y:number):number => x + y
const sub: mathFunc = (x:number, y:number):number => x + y



// Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string){
       this.id = id
       this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const asadulloh = new Person(1, "Asadulloh")
const asadbek = new Person(2, "Asadbek")

console.log(asadulloh.register())
console.log(asadulloh, asadbek)



// Extending classes (SubClasses)
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
          super(id, name)
          this.position = position
    }
}

const ischi = new Employee(2,"Shown", "Developer")

console.log(ischi);
console.log(ischi.register())

// Generics

/* 
  Generics are a TypeScript feature that 
  allows us to pass in various
  types of data and create reusable code
  to handle different inputs. 
  They allow us to define placeholder 
  types which are then replaced when the 
  code is executed with the actual types passed in.
*/

function getArray<T>(items:T[]):T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5, 6])
let strArray = getArray<string>(['Asadulloh', 'Asadbek', "Someone"])




