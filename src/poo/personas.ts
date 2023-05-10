import { IPersona } from "./Interface_persona";

export class Hombre implements IPersona {
    public nombre: string;
    public apellido: string;
    public edad!: number;

    constructor( nombre?: string, apellido?: string ) {
        this.nombre =  nombre ?? '';
        this.apellido = apellido ?? '';
    }

    public nombre_completo(): string {
        return `Su nombre completo es: ${this.nombre} ${this.apellido}.`;
    }

    public hablar_futbol( equipo: string, minutos: string ) {
        console.log(`Hablemos sobre el: ${equipo}, ${minutos} minutos, pues está jugando como los dioses.`);
    }
}

export class Mujer implements IPersona {
    public nombre!: string;
    public apellido!: string;
    public edad!: number;

    public nombre_completo(): string {
        return `Su nombre completo es: ${this.nombre} ${this.apellido}.`;
    }

    public ir_cine( sala:string, pelicula: string ): void {
        console.log(`Viendo ${pelicula} en ${sala}.`);   
    }
}