import * as rls from 'readline-sync';

export class Dato {
    protected nombre: string;
    protected id: number;
    constructor(nombre: string) {
        this.nombre = nombre;
        this.id = this.generarNumRandom();
    }
    generarNumRandom(): number {
        let numeroRandom = Math.random() * 1000;
        return Math.round(numeroRandom);
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getId(): number {
        return this.id;
    }
    public setNombre() {
        let nuevoNombre: string = rls.question("Escriba el numero nombre: ")
        this.nombre = nuevoNombre;
    }
    public setId(id: number) {
        this.id = id ;
    }

}