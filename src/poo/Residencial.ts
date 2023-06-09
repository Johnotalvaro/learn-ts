import { Construccion } from "./Construccion";
import { IPersona } from "./Interface_persona";
import { Hombre, Mujer } from "./personas";

export class Residencial extends Construccion {
    private _habitantes: Array<IPersona>
    constructor( pisos :number){
        super (pisos);
        this._habitantes = [];
    }
    public override impuestos(): number {
        return this.pisos * 1500000;
    }
    public numero_habitantes(): number {
        return this._habitantes.length;
    }
    public agregar_habitantes( persona: IPersona ) {
        this._habitantes.push(persona);
    }
    public listar_habitantes() {
        this._habitantes.forEach((habitante) => {
             console.log(habitante.nombre_completo());
             if (habitante instanceof Hombre) {
                habitante.hablar_futbol('Nacional', 10)  
             } else if (habitante instanceof Mujer) {
                habitante.ir_cine('Sala 11', 'Mario')
             }
            });
    }
}