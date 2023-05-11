export abstract class Construccion {
    public static cantidad_edificios: number = 0;
    private _pisos: number;

    constructor(pisos: number) {
        this._pisos = pisos;
        Construccion.cantidad_edificios += 1;
    }

    public impuestos(): number {
        return this._pisos * 3000000;
    }

    public get pisos(): number {
        return this._pisos;
    }

    public set pisos( pisos: number ) {
        this._pisos = pisos;
    }

    public static edificios_contador(): number {
        return this.cantidad_edificios;
    }
}