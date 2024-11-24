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
<<<<<<< HEAD

 setNombre(nombre:string){
   this.nombre=nombre;
 }

=======
>>>>>>> f8c4ef544e3d32bcc62c075161d3d9e793aac92c
 setTelefono(telefono:number){
   this.telefono=telefono;
 }
<<<<<<< HEAD

 setId(id:number){
   this.id=id;
 }
=======
>>>>>>> f8c4ef544e3d32bcc62c075161d3d9e793aac92c
}