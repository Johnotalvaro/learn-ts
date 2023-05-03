const teacher = {
    name: 'Jhon',
    lastName: 'Otalvaro',
    age: 21
};

console.log('Teacher is json', teacher);

// Primitivos
// Booleans
// Declaración implícita
const isTeacher = true; // Toma el valor con el que fue declarado y ese es el tipo
let isPlayer = true; // Toma el tipo del valor que se le asigno
isPlayer = false;

// Declaración explicita
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'Tiene errores' : 'No tiene errores';

// String
const firstName = 'Jhon';
const lastName = 'Otalvaro';

let fullName: string = `Su nombre es: ${firstName} ${lastName}, bienvenido`;
console.log(fullName.toUpperCase());

// Number
let countStudent: number = 29;
let average: number = 4.5;

console.log(average.toFixed());

// Array 
let fruits = ['pera', 'banano'];
let sports: string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null;

// Union types
let students: Array<string | null> = ['Nico', 'Jhon', null, 'Rayffer', null, 'Ana'];
console.log(students.filter((students) => students !== null));

// Tuples
let exampleTuple: [string , null] = [ 'hola', null];


// Tipos personalizados
type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';
