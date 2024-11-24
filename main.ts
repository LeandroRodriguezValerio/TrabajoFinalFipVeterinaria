<<<<<<< HEAD
import { Cliente } from "./cliente";
import { ID } from "./generadorID";
import { Proveedor } from "./proveedores";
import { Veterinaria } from "./veterinaria";
import { Menu } from "./menu";
import { Paciente } from "./pacientes";
let vete1 = new Veterinaria("Patitas", "Leal 3343", 522);
let cliente1 = new Cliente("Pepe", 222, 12, 0);
let paciente1 =new Paciente ("Covi","Perro", 2)
let proveedor1 = new Proveedor("Remedios", 333, 6);
let Id1 = new ID("a", "s", 0);
let menu1 = new Menu (vete1,cliente1,paciente1,proveedor1)
console.log(cliente1);

menu1.menuPrincipal(vete1,cliente1,paciente1,proveedor1)





// vete1.agregarCliente(cliente1);
// vete1.agregarProveedor(proveedor1);
// console.log(vete1.getlistaClientes());
// //vete1.darDeBajaCliente(0)
// console.log(vete1.getlistaClientes());
// console.log(vete1.getlistaProovedores());
// //vete1.modificarNombre()
// //vete1.modificarTelefonoCliente()
// console.log(vete1.generarIDRandom());
// console.log(vete1.getlistaClientes());
// console.log(vete1.getlistaProovedores());
=======
import { Cliente } from "./Cliente";
import { Paciente } from "./Pacientes";
import { Proveedor } from "./proveedores";
import { Veterinaria } from "./Veterinaria";
import { Menu } from "./Menu";
import { Sucursal } from "./sucursal";

let cliente1= new Cliente("Pepe", 222, 1)
let vete1= new Veterinaria("Patitas", "aca", 522)
let paciente1 = new Paciente("perro","perro",cliente1)
let proveedor1 = new Proveedor("prov",155551) 
let sucursal1 =new Sucursal("suc",1155,"ssd44")
let menu1 =new Menu(vete1)
//console.log(cliente1)
vete1.agregarCliente(cliente1)
console.log(vete1.getlistaClientes())   
console.log(paciente1.getId())
//vete1.setNumRandom(paciente1)
console.log(cliente1.getId())
console.log(paciente1.getId())

console.log(proveedor1.getId())
console.log(cliente1.getNombre())
//cliente1.setNombre()
console.log(cliente1.getNombre())
vete1.agregarSucursal(sucursal1)

//vete1.agregarPaciente()
menu1.menuPrincipal(vete1)
>>>>>>> f8c4ef544e3d32bcc62c075161d3d9e793aac92c
