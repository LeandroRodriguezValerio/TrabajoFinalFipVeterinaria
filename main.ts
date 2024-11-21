import { Cliente } from "./Cliente";
import { ID } from "./GeneradorID";
import { Proveedor } from "./Proveedores";
import { Veterinaria } from "./Veterinaria";

let vete1= new Veterinaria("Patitas", "aca", 522)
let cliente1= new Cliente("Pepe", 222, 12,0)
let proveedor1 = new Proveedor("Remedios",333,6)
let Id1 =  new ID ("a","s",0)
console.log(cliente1)

vete1.agregarCliente(cliente1)
vete1.agregarProveedor(proveedor1)
console.log(vete1.getlistaClientes())
//vete1.darDeBajaCliente(0)
console.log(vete1.getlistaClientes())
console.log(vete1.getlistaProovedores())
//vete1.modificarNombre()
//vete1.modificarTelefonoCliente()
console.log(vete1.generarIDRandom())
console.log(vete1.getlistaClientes())
console.log(vete1.getlistaProovedores())