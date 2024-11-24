

  
export class Sucursal{
    private nombre: string;
    private telefono: number;
    private idCliente:number;

    constructor(nombre:string, telefono:number, idCliente:number){
        this.nombre = nombre;
        this.telefono = telefono;
        this.idCliente = idCliente;
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
        return this.nombre=nombre;
     }
    
     setTelefono(telefono:number){
        return this.telefono=telefono;
     }
    
     setId(id:number){
        return this.idCliente=id;
     }
}
