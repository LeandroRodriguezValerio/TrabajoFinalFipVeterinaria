import { Dato } from "./Dato";

export class Paciente extends Dato {
protected nombre:string;
private especie:string;
public id:number;


constructor(nombre:string, especie:string,idDueño:number){
    super(nombre);
    this.nombre = nombre;
    this.especie = especie;
    this.id = idDueño;
    
}
//getters
getEspecie():string{
    return this.especie;
}
getId():number{
    return this.id;
 }
//setters
setEspecie(nuevaEspecie:string):void{
    this.especie = nuevaEspecie;
}
setId(id:number){
     this.id=id;
 }
}