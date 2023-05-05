class Animal {
    color!: string;
    especie!: string;
    peso!: number;
    tamanio!: number;

    constructor() {
        console.log('Creando un animal');
    }

    alimentarse(): void {
        console.log('Alimentándome');
    }
}

// La herencia se da gracias a la palabra reservada extends
class Gato extends Animal {
    constructor() {
        super();
        console.log('Creando un gato a partir de animal');
    }
}

class Perro extends Animal {
    constructor() {
        super();
        console.log('Creando un perro a partir de animal');
    }
}