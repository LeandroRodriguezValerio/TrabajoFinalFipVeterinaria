import { Dato } from "./Dato";

export class Proveedor extends Dato{
 protected nombre: string;
 protected telefono: number;
 protected id:number;    

 constructor(nombre:string, telefono:number){
   super(nombre)
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = this.generarNumRandom();

 }
 //getters
 getTelefono():number{
    return this.telefono;
 }
 //setters 
 setTelefono(telefono:number){
    return this.telefono;
 }
}