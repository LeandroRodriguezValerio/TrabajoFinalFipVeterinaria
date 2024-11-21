import { Cliente } from "./Cliente";
import { Paciente } from "./Pacientes";
import { Proveedor } from "./proveedores";
import { Veterinaria } from "./Veterinaria";


let cliente1= new Cliente("Pepe", 222, 1)
let vete1= new Veterinaria("Patitas", "aca", 522)
let paciente1 = new Paciente("perro","perro")
let proveedor1 = new Proveedor("prov",155551) 
//console.log(cliente1)
vete1.agregarCliente(cliente1)
console.log(vete1.getlistaClientes())   
console.log(paciente1.getId())
//vete1.setNumRandom(paciente1)
console.log(paciente1.getId())

console.log(proveedor1.getId())