import * as rls from "readline-sync";
import { Veterinaria } from "./veterinaria";
import { Cliente } from "./cliente";
import { Paciente } from "./pacientes";
import { Proveedor } from "./proveedores";

export class Menu {
  veterinaria: Veterinaria;
  cliente: Cliente;
  paciente: Paciente;
  proveedor: Proveedor;

  constructor(
    veterinaria: Veterinaria,
    cliente: Cliente,
    paciente: Paciente,
    proveedor: Proveedor
  ) {
    this.veterinaria = veterinaria;
    this.cliente = cliente;
    this.paciente = paciente;
    this.proveedor = proveedor;
  }

  menuPrincipal(
    veterinaria: Veterinaria,
    cliente: Cliente,
    paciente: Paciente,
    proveedor: Proveedor
  ) {
    console.clear();
    console.log(
      "RED DE VETERINARIAS PATITAS\n" +
        "Bienvenido\n" +
        "----------------------------------------\n" +
        "1 - Sucursales\n" +
        "2 - Pacientes\n" +
        "3 - Proveedores\n" +
        "4 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Sucursales");
        this.menuSucursal(veterinaria, cliente, paciente, proveedor)
        break;
      case 2:
        console.log("Opción 2: Pacientes");
        this.menuPaciente(veterinaria, cliente, paciente, proveedor)
        break;
      case 3:
        console.log("Opción 3: Proveedores");
        this.menuProveedores(veterinaria, cliente, paciente, proveedor)
        break;
      case 4:
        console.log("Opción 4: Salir Completamente");
        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 4.");
        setTimeout(() => {
          this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        }, 2000);
        break;
    }
  }
  menuSucursal(
    veterinaria: Veterinaria,
    cliente: Cliente,
    paciente: Paciente,
    proveedor: Proveedor
  ) {
    console.clear();
    console.log(
      "----------------------------------------\n" +
        "1 - Informacion Sucursal\n" +
        "2 - Nueva sucursal\n" +
        "3 - Modificar Sucursal\n" +
        "4 - Borrar Sucursal\n" +
        "5 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Informacion Sucursales");
        //mostrarSucursales()
        break;
      case 2:
        console.log("Opción 2: Nueva Sucursal");
        //agregarSucursal()
        break;
      case 3:
        console.log("Opción 3: Modificar Sucursal");
        //modificarSucursal
        break;
      case 4:
        console.log("Opción 4: Borrar Sucursal");
        //borrarSucursal()
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
          this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        }, 2000);
        break;
    }
  }
  menuPaciente(
    veterinaria: Veterinaria,
    cliente: Cliente,
    paciente: Paciente,
    proveedor: Proveedor
  ) {
    console.clear();
    console.log(
      "----------------------------------------\n" +
        "1 - Informacion Paciente\n" +
        "2 - Agregar nuevo Paciente\n" +
        "3 - Modificar Paciente\n" +
        "4 - Borrar Paciente\n" +
        "5 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Informacion Paciente");
        //mostrarSucursales()
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Paciente");
        //agregarSucursal()
        break;
      case 3:
        console.log("Opción 3: Modificar Paciente");
        //modificarSucursal
        break;
      case 4:
        console.log("Opción 4: Borrar Paciente");
        //borrarSucursal()
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
          this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        }, 2000);
        break;
    }
  }
  menuProveedores(
    veterinaria: Veterinaria,
    cliente: Cliente,
    paciente: Paciente,
    proveedor: Proveedor
  ) {
    console.clear();
    console.log(
      "----------------------------------------\n" +
        "1 - Informacion Proveedor\n" +
        "2 - Agregar nuevo Proveedor\n" +
        "3 - Modificar Proveedor\n" +
        "4 - Borrar Proveedor\n" +
        "5 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Informacion Proveedor");
        //mostrarSucursales()
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Proveedor");
        //agregarSucursal()
        break;
      case 3:
        console.log("Opción 3: Modificar Proveedor");
        //modificarSucursal
        break;
      case 4:
        console.log("Opción 4: Borrar Proveedor");
        //borrarSucursal()
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
          this.menuPrincipal(veterinaria, cliente, paciente, proveedor);
        }, 2000);
        break;
    }
  }
}
function menuPacientes(veterinaria: Veterinaria, cliente: Cliente, paciente: Paciente, proveedor: Proveedor) {
    throw new Error("Function not implemented.");
}

