import * as rls from "readline-sync";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Pacientes";
import { Proveedor } from "./proveedores";
import { Sucursal } from "./sucursal";
import { Dato } from "./Dato";

export class Menu {
  veterinaria: Veterinaria;
  cliente: Cliente[];
  paciente: Paciente[];
  proveedor: Proveedor[];
  sucursal :Sucursal[];
 

  constructor(veterinaria: Veterinaria,cliente?: Cliente[],paciente?: Paciente[], proveedor?: Proveedor[],sucursal?:Sucursal[]) {
    this.veterinaria = veterinaria;
    if (cliente!=undefined){
       this.cliente = cliente;
    }else{
        this.cliente = []
    }
    if (paciente!=undefined){
    this.paciente = paciente;
    }else{
        this.paciente=[]
    }if(proveedor!=undefined){
    this.proveedor = proveedor;
    }else{
        this.proveedor= veterinaria.getListaProveedores()
    }if (sucursal!=undefined){
        this.sucursal=sucursal
    }else{
        this.sucursal=veterinaria.getListaSucursal()
    }
  }

  menuPrincipal(veterinaria:Veterinaria) {
    console.clear();
    console.log(
      "RED DE VETERINARIAS PATITAS\n" +
        "Bienvenido\n" +
        "----------------------------------------\n" +
        "1 - Sucursales\n" +
        "2 - Pacientes\n" +
        "3 - Proveedores\n" +
        "4 - Clientes\n" +
        "5 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Sucursales");
        this.menuSucursal(this.sucursal)
        break;
      case 2:
        console.log("Opción 2: Pacientes");
        this.menuPaciente(this.veterinaria)
        break;
      case 3:
        console.log("Opción 3: Proveedores");
        this.menuProveedores(this.proveedor)
        break;
        case 4:
            console.log("Opción 3: Clientes");
        this.menuClientes(this.cliente)
        break;
      case 5:
        console.log("Opción 5: Salir Completamente");
        break;
        
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 4.");
        setTimeout(() => {
          this.menuPrincipal(veterinaria);
        }, 2000);
        break;
    }
  }
  menuSucursal(sucursal:Sucursal[]) {
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
        //this.sucursal.forEach(sucursal=>console.log(` Nombre : ${sucursal.getNombre()} Direccion: ${sucursal.getDireccion()} Id: ${sucursal.getId()}  `))
        console.log(`registro de informacion sucursales: Nombre:${this.veterinaria.getListaSucursal().map(sucursal=>sucursal.getNombre())} , Direccion: ${this.veterinaria.getListaSucursal().map(sucursal=>sucursal.getDireccion())} , Id: ${this.veterinaria.getListaSucursal().map(sucursal=>sucursal.getId())}   `)
        setTimeout(() => {
          this.menuSucursal(this.sucursal);

      }, 2000);
        break;
      case 2:
        console.log("Opción 2: Nueva Sucursal");
        //agregarSucursal()
        setTimeout(() => {
          this.menuSucursal(this.sucursal);

      }, 2000);
        break;
      case 3:
        console.log("Opción 3: Modificar Sucursal");
        //modificarSucursal
        setTimeout(() => {
          this.menuSucursal(this.sucursal);

      }, 2000);
        break;
      case 4:
        console.log("Opción 4: Borrar Sucursal");
        //borrarSucursal()
        setTimeout(() => {
          this.menuSucursal(this.sucursal);

      }, 2000);
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(this.veterinaria);
        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
            this.menuPrincipal(this.veterinaria);

        }, 2000);
        break;
    }
  }
  menuPaciente(veterinaria:Veterinaria) {
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
        //mostrarPaciente()
        console.log(veterinaria.getListaPacientes())
        console.log(`registro de informacion sucursales: Nombre:${this.veterinaria.getListaPacientes().map(paciente=>paciente.getNombre())} , Especie: ${this.veterinaria.getListaPacientes().map(paciente=>paciente.getEspecie())} , Id: ${this.veterinaria.getListaPacientes().map(paciente=>paciente.getId())}   `)

        setTimeout(() => {
          this.menuPaciente(veterinaria);
        }, 2000);
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Paciente");
        //agregarPaciente()
        
        veterinaria.agregarPaciente()
        setTimeout(() => {
          this.menuPaciente(veterinaria);
        }, 2000);
        break;
      case 3:
        console.log("Opción 3: Modificar Paciente");
        //modificarPaciente
        veterinaria.setNombre()
        setTimeout(() => {
          this.menuPaciente(veterinaria);
        }, 2000);
        break;
      case 4:
        console.log("Opción 4: Borrar Paciente");
        //borrarPaciente()
        setTimeout(() => {
          this.menuPaciente(veterinaria);
        }, 2000);
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(this.veterinaria);

        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
            this.menuPrincipal(this.veterinaria);

        }, 2000);
        break;
    }
  }
  menuProveedores(proveedor: Proveedor[]) {
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
        console.log(`registro de informacion Proveedores: Nombre:${this.veterinaria.getListaProveedores().map(proveedor=>proveedor.getNombre())} , Telefono: ${this.veterinaria.getListaProveedores().map(proveedor=>proveedor.getTelefono())} , Id: ${this.veterinaria.getListaProveedores().map(proveedor=>proveedor.getId())}   `)
        setTimeout(() => {
          this.menuProveedores(proveedor);

      }, 2000);
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Proveedor");
        //agregarProveedores()
        setTimeout(() => {
          this.menuProveedores(proveedor);

      }, 2000);
        break;
      case 3:
        console.log("Opción 3: Modificar Proveedor");
        //modificarProveedores
        setTimeout(() => {
          this.menuProveedores(proveedor);

      }, 2000);
        break;
      case 4:
        console.log("Opción 4: Borrar Proveedor");
        //borrarProveedores()
        setTimeout(() => {
          this.menuProveedores(proveedor);

      }, 2000);
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(this.veterinaria);

        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
            this.menuPrincipal(this.veterinaria);

        }, 2000);
        break;
    }
  }
  menuClientes(cliente:Cliente[]) {
    console.clear();
    console.log(
      "----------------------------------------\n" +
        "1 - Informacion Cliente\n" +
        "2 - Agregar nuevo Cliente\n" +
        "3 - Modificar Cliente\n" +
        "4 - Borrar Cliente\n" +
        "5 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Informacion Cliente");
        //mostrarSucursales()
        this.veterinaria.listaClientes.forEach((listaClientes) => {
          console.log(`Registro de informacion sucursales: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
      });
       setTimeout(() => {
          this.menuClientes(cliente);

      }, 2000);
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Cliente");
        this.veterinaria.agregarCliente5()
        setTimeout(() => {
          this.menuClientes(cliente);

      }, 2000);
        break;
      case 3:
        console.log("Opción 3: Modificar Cliente");
        this.veterinaria.cambioNombreCliente()
        setTimeout(() => {
          this.menuClientes(cliente);

      }, 2000);
        break;
      case 4:
        console.log("Opción 4: Borrar Cliente");
        this.veterinaria.darDeBajaCliente()
        setTimeout(() => {
          this.menuClientes(cliente);

      }, 2000);
        break;
      case 5:
        console.log("Opción 4: Volver al menu principal");
        this.menuPrincipal(this.veterinaria);

        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 1 y 5.");
        setTimeout(() => {
            this.menuPrincipal(this.veterinaria);

        }, 2000);
        break;
    }
  }
  

}