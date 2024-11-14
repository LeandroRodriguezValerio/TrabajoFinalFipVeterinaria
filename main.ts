import { Cliente } from "./Cliente";
import { Veterinaria } from "./Veterinaria";


let cliente1= new Cliente("Pepe", 222, 12,4)
let vete1= new Veterinaria("Patitas", "aca", 522)
console.log(cliente1)
vete1.agregarCliente(cliente1)
console.log(vete1.getlistaClientes())
