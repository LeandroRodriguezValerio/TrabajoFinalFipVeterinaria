import { Cliente } from "./Cliente";
import { Paciente } from "./Pacientes";
import { Proveedor } from "./proveedores";
import { Veterinaria } from "./Veterinaria";
import { Menu } from "./Menu";
import { Sucursal } from "./sucursal";

let cliente1= new Cliente("Pepe", 222, 1)
let cliente2= new Cliente("juan", 333, 1)
let cliente3= new Cliente("Alfredo", 444, 7)
let vete1= new Veterinaria("Patitas", "Belgrano 2790", 522)
let paciente1 = new Paciente("perro","perro",12)
let proveedor1 = new Proveedor("prov",155551) 
let sucursal1 =new Sucursal("Patitas","Rivadavia 2420")
let menu1 =new Menu(vete1)
//console.log(cliente1)
//vete1.agregarCliente(cliente1)
//console.log(vete1.getlistaClientes())   
//console.log(paciente1.getId())
//vete1.setNumRandom(paciente1)
//console.log(cliente1.getId())
//console.log(paciente1.getId())

//console.log(proveedor1.getId())
//console.log(cliente1.getNombre())
//cliente1.setNombre()
//console.log(cliente1.getNombre())
//vete1.agregarSucursal(sucursal1)

//vete1.agregarPaciente()
menu1.menuPrincipal(vete1)