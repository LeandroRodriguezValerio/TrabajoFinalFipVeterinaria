import { Cliente } from "./Cliente";
import { Dato } from "./Dato";


  
export class Sucursal extends Dato{
    protected nombre: string;
    protected telefono: number;
    protected id:number;
   protected direccion: string;
    constructor(nombre:string, telefono:number,direccion:string){
      super(nombre)
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = this.generarNumRandom();
        this.direccion = direccion;
    }

    //getters 

    getNombre():string{
        return this.nombre;
     }
    
     getTelefono():number{
        return this.telefono;
     }
     getDireccion():string{
      return this.direccion;
     }
     getId():number{
      return this.id
     }
    
     //setters 
    
     setNombre(nombre:string){
        return this.nombre;
     }
    
     setTelefono(telefono:number){
        return this.telefono=telefono;
     }
    
     setId(id:number){
        return this.idCliente;
     }
}
