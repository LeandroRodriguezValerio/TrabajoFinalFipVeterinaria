export class Proveedor {
 private nombre: string;
 private telefono: number;
 private id:number;    

 constructor(nombre:string, telefono:number, id:number){
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id;

 }

 //getters

 getNombre():string{
    return this.nombre;
 }

 getTelefono():number{
    return this.telefono;
 }

 getId():number{
    return this.id;
 }

 //setters 

 setNombre(nombre:string){
    return this.nombre;
 }

 setTelefono(telefono:number){
    return this.telefono;
 }

 setId(id:number){
    return this.id;
 }
}