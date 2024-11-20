export class Paciente {
private nombre:string;
private especie:string;
private id:number

constructor(nombre:string, especie:string, id:number ){
    this.nombre = nombre
    this.especie = especie
    this.id = id
}

//getters
getNombre():string{
    return this.nombre;
}
getEspecie():string{
    return this.especie;
}
getId():number{
    return this.id;
}



//setters
setNombre(nuevoNombre:string):void{
    this.nombre = nuevoNombre;
}

setEspecie(nuevaEspecie:string):void{
    this.especie = nuevaEspecie;
}
setId(nuevoId:number):void{
    this.id = nuevoId;
}















}