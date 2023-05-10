import { IPersona } from "./Interface_persona";
import { Hombre, Mujer } from "./personas";

const hombre1: IPersona = new Hombre( 'Jhon', 'Otalvaro' );
hombre1.edad = 22;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre( 'Pepita Perez' );
hombre3.edad = 18; 
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre( undefined, 'Pepe Perez' );
hombre4.edad = 18; 
hombre4.nombre_completo();

const mujer: IPersona = new Mujer();