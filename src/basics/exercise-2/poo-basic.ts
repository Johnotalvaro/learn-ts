class Auto {
    // Atributos ce la clase o propiedades
    color: string = 'Negro'; // Inicializar directamente - Evitar realizar esto
    puertas: number; // Inicializar en el constructor
    marca?: string; // Marcas como opcionales

    // Inicializar propiedades de la clase - Método que se ejecuta al realizar una instancia de la clase
    constructor(marca?: string) {
        this.puertas = 4; // Con this, accedo a todas las propiedades y métodos de la clase
        this.marca = marca;
    }

    // Métodos de la clase
    acelerar(){
        console.log('Acelerando');
    }

    frenar(){
        console.log('Frenando');
    }

    prender(){
        console.log('Prendiendo');
    }
} 

let ferrari: Auto = new Auto() //Instancia de la clase Auto - Objeto
console.log(ferrari);
console.log(ferrari.marca);
ferrari.marca = 'Ferrari';
console.log(ferrari.marca);
console.log(ferrari);
ferrari.color = 'Blanco';
console.log(ferrari);

let bmw = new Auto();
console.log(bmw);
bmw.puertas = 4;
bmw.marca = 'BMW';
bmw.color = 'Exótico';
console.log(bmw);

class Auto2 {
    color: string = 'Negro'; // Implícita - Por defecto es publico
    public puertas: number; // Forma explicita para colocar una propiedad publica

    // En el constructor to puedo crear propiedades de la clase
    // si y solo si tienen el modificador de acceso ( public, private, protected )

    // Los parámetros que son opcionales, siempre deben ir al final de cualquier método o función
    // en este caso el constructor es un método
    constructor( public peso: number, public marca?: string ) {
        this.puertas = 4;
        this.encender();

    }

    apagar() {
        console.log('Apagando');
    }

    encender() {
        console.log(`Bienvenido ${this.marca}, tu color es ${this.color}, tu peso es ${this.peso} y tienes ${this.puertas} puertas.`);
    }
}

let ford = new Auto2(500, 'Ford');
console.log(ford);
ford.apagar();