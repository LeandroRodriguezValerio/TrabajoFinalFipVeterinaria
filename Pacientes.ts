import { Dato } from "./Dato";

export class Paciente extends Dato {
protected nombre:string;
private especie:string;
public id:number;

constructor(nombre:string, especie:string,){
    super(nombre);
    this.nombre = nombre;
    this.especie = especie;
    this.id = this.generarNumRandom();
}
//getters
getEspecie():string{
    return this.especie;
}




//setters

setEspecie(nuevaEspecie:string):void{
    this.especie = nuevaEspecie;
}
















}