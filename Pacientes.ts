import { Cliente } from "./Cliente";
import { Dato } from "./Dato";

export class Paciente extends Dato {
    protected nombre:string;
    private especie:string;
    public id:number;
    //public duenio: Cliente;
    
    constructor(nombre:string, especie:string,idDuenio:number){
        super(nombre);
        this.nombre = nombre;
        this.especie = especie;
        //this.duenio=duenio;
        this.id = idDuenio;
    
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
        return this.id;
     }
    /*getDuenio():Cliente{
        return this.duenio;
    }
    setDuenio(nuevoDuenio:number):void{
        this.duenio = nuevoDuenio
    }*/
    }

/*export class Paciente extends Dato {
protected nombre:string;
private especie:string;
public idCliente:number;
public duenio: Cliente;

constructor(nombre:string, especie:string,duenio:Cliente){
    super(nombre);
    this.nombre = nombre;
    this.especie = especie;
    this.id = this.generarNumRandom();
    this.idCliente = duenio.getId() ;
    this.duenio=duenio;
}
//getters
getEspecie():string{
    return this.especie;
}
getId():number{
    return this.idCliente;
 }
getDuenio():Cliente{
    return this.duenio;
}
//setters
setEspecie(nuevaEspecie:string):void{
    this.especie = nuevaEspecie;
}
setId(id:number){
    this.idCliente=id;
 }*/
