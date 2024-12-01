import { Cliente } from "./Cliente";
import { Dato } from "./Dato";


  
export class Sucursal extends Dato{
    protected nombre: string;
    protected id:number;
   protected direccion: string;
    constructor(nombre:string,direccion:string){
      super(nombre)
        this.nombre = nombre;
        
        this.id = this.generarNumRandom();
        this.direccion = direccion;
    }

    //getters 

    getNombre():string{
        return this.nombre;
     }
    
    
     
     getDireccion():string{
      return this.direccion;
     }
     getId():number{
      return this.id;
     }
    
     
     }

