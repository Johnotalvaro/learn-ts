import { Comercial } from "./Comercial";
import { Construccion } from "./Construccion";
import { IPersona } from "./Interface_persona";
import { Residencial } from "./Residencial";
import { Hombre, Mujer } from "./personas";

const hombre1: IPersona = new Hombre( 'Jhon', 'Otalvaro' );
hombre1.edad = 22;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre( 'Pepito Perez' );
hombre3.edad = 18; 
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre( undefined, 'Pepe Perez' );
hombre4.edad = 18; 
hombre4.nombre_completo();

const mujer: IPersona = new Mujer();

const residencial = new Residencial( 6 );
console.log('Impuestos de residencial', residencial.impuestos() );
residencial.agregar_habitantes ( hombre1 );
residencial.agregar_habitantes ( hombre2 );
residencial.agregar_habitantes ( hombre3 );
residencial.agregar_habitantes ( hombre4 );
residencial.agregar_habitantes ( mujer );
residencial.listar_habitantes();

const comercial = new Comercial ( 3, 25 );
console.log( 'Impuestos de comercial', comercial.impuestos() );

const comercial2 = new Comercial ( 3, 25 );
console.log( 'Impuestos de comercial2', comercial2.impuestos() );


console.log(`La constructora bienes y buenes hizo ${Construccion.edificios_contador()} construcciones.`);

