import { Cliente } from "./Cliente";
import { Dato } from "./Dato";

export class Paciente extends Dato {
protected nombre:string;
private especie:string;
public idCliente:number;
public dueño: Cliente;

constructor(nombre:string, especie:string,dueño:Cliente){
    super(nombre);
    this.nombre = nombre;
    this.especie = especie;
    this.id = this.generarNumRandom();
    this.idCliente = dueño.getId() ;
    this.dueño=dueño;
}
//getters
getEspecie():string{
    return this.especie;
}
getId():number{
    return this.idCliente;
 }
//setters
setEspecie(nuevaEspecie:string):void{
    this.especie = nuevaEspecie;
}
setId(id:number){
    return this.idCliente;
 }














}