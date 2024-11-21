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

    setNombre(nuevoNombre:string):void{
        this.nombre = nuevoNombre;
    }
    public setId(id: number) {
        this.id = id ;
    }
}