import { Cliente } from "./Cliente";
import { Dato } from "./Dato";


  
export class Sucursal extends Dato{
    protected nombre: string;
    protected telefono: number;
    protected idCliente:number;
    protected dueño:Cliente

    constructor(nombre:string, telefono:number,dueño:Cliente ){
      super(nombre)
        this.nombre = nombre;
        this.telefono = telefono;
        this.idCliente = dueño.getId() ;
    }

    //getters 

    getNombre():string{
        return this.nombre;
     }
    
     getTelefono():number{
        return this.telefono;
     }
    
     getId():number{
        return this.idCliente;
     }
    
     //setters 
    
     setNombre(nombre:string){
        return this.nombre;
     }
    
     setTelefono(telefono:number){
        return this.telefono;
     }
    
     setId(id:number){
        return this.idCliente;
     }
}
