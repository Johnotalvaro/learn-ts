import { Construccion } from "./Construccion";
import { IPersona } from "./Interface_persona";
import { Hombre, Mujer } from "./personas";

export class Residencial extends Construccion {
    private habitantes: Array<IPersona>
    constructor( pisos :number){
        super (pisos);
        this.habitantes = [];
    }
    public override impuestos(): number {
        return this.pisos * 1500000;
    }
    public numero_habitantes(): number {
        return this.habitantes.length;
    }
    public agregar_habitantes( persona: IPersona ) {
        this.habitantes.push(persona);
    }
    public listar_habitantes() {
        this.habitantes.forEach((habitantes) => {
             console.log(habitantes.nombre_completo());
             if (habitantes instanceof Hombre) {
                habitantes.hablar_futbol('Nacional', 10)  
             } else if (habitantes instanceof Mujer) {
                habitantes.ir_cine('Sala 11', 'Mario')
             }
            });
    }
}