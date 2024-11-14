import { Cliente } from "./Cliente"
import { Proveedor } from "./proveedores";
import { Mascota } from "./Mascotas";
export class Veterinaria {
 private nombre:string;
 private direccion:string;
 private id:number;
 private listaClientes:Cliente[]=[];
 private listaMascotas:Mascotas[]=[];
 private listaProvedores:Proveedores[]=[];



constructor(nombre:string, direccion:string, id:number){
this.nombre = nombre;
this.direccion = direccion;
this.id = id;
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

//setters
setNombre(nuevoNombre:string):void{
    this.nombre = nuevoNombre;
}

setDireccion(nuevaDireccion:string):void{
    this.direccion = nuevaDireccion;
}
setId(nuevoId:number):void{
    this.id = nuevoId;
}
}

//metodos TODAVIA POR ARREGLAR
// agregarCliente (cliente: Cliente): void {
//     this.listaClientes.push(cliente);
// }

// agregarMascota (mascota: Mascota): void {
//     this.listaMascotas.push(Mascota);
// }

// agregarProveedor (proveedor: Proveedor): void {
//     this.listaProvedores.push(proveedor);
// }