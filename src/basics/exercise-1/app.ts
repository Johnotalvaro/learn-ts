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
let exampleTuple: [string, null] = ['hola', null];


// Tipos personalizados
type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';

// Any (Mala práctica)
let working: any = 25;
working = 'hola';

// Funciones
/**
 * function nombreFuncion(parametro: tipoDato): tipoDatoQueRetornaraLaFuncion()
 */
function validateValue(value: unknown): boolean {

    // unknown que es un tipo de dato que es desconocido
    // para cualquier validación que deba hacer con el dato
    // debo primero saber o validar que tipo de dato es
    if (typeof value === 'string') {
        console.log(value.trim().toLocaleUpperCase());
    } else if (typeof value === 'number') {
        console.log(value.toFixed());
    }

    if (value === '') {
        return false;
    } else {
        return true;
    }
}

function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// void
function proccessResponsive( saved: boolean ): void {
    if (saved) {
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }
}

console.log(getFullName(firstName, lastName) );
proccessResponsive(true);


enum Role {
    Admin = 'ADMIN',
    Client = 'CLIENT',
    Users = 'USER',
    SuperAdmin = 'SUPERADMIN'
}

let users: Array < { name: string, role: Role } > = [
    {
        name: 'Pepito',
        role: Role.Admin
    },
    {
        name: 'Juanito',
        role: Role.Client
    },
    {
        name: 'Fulanito',
        role: Role.Client
    }
]

console.log( users.filter( (user) => user.role === Role.Client ) );