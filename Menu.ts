import * as rls from "readline-sync";
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Pacientes";
import { Proveedor } from "./proveedores";
import { Sucursal } from "./sucursal";
import { Dato } from "./Dato";
import cluster from "cluster";

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
        this.menuPaciente(this.paciente,this.cliente)
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
        "5 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Informacion Sucursales");
        this.veterinaria.listaSucursal.forEach((listaSucursal) => {
          console.log(`Registro de informacion sucursales: Nombre: ${listaSucursal.getNombre()}, Telefono: ${listaSucursal.getTelefono()}, Id: ${listaSucursal.getId()}.\n`)
          });
        setTimeout(() => {
          this.menuSucursal(this.sucursal);
      }, 3000);
        break;
      case 2:
        console.log("Opción 2: Nueva Sucursal");
        this.veterinaria.agregarSucursal5()
          this.menuSucursal(this.sucursal);
        break;
      case 3:
        console.log("Opción 3: Modificar Sucursal");
        //modificarSucursal FALTA
        setTimeout(() => {
          this.menuSucursal(this.sucursal);
      }, 2000);
        break;
      case 4:
        console.log("Opción 4: Borrar Sucursal");
        this.veterinaria.darDeBajaSucursal()
        setTimeout(() => {
          this.menuSucursal(this.sucursal);
      }, 1000);
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
  menuPaciente(paciente:Paciente[],cliente:Cliente[]) {
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
        console.log(this.veterinaria.getListaPacientes())
        console.log(`registro de informacion pacientes: Nombre:${this.veterinaria.getListaPacientes().map(paciente=>paciente.getNombre())} , Especie: ${this.veterinaria.getListaPacientes().map(paciente=>paciente.getEspecie())} , Id: ${this.veterinaria.getListaPacientes().map(paciente=>paciente.getId())}   `)

        setTimeout(() => {
          this.menuPaciente(paciente,cliente);
        }, 2000);
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Paciente");

        this.veterinaria.agregarPaciente();
                  
        setTimeout(() => {
          this.menuPaciente(paciente,cliente);
        }, 2000);
        break;
      case 3:
        console.log("Opción 3: Modificar Paciente");
        //modificarPaciente
        this.veterinaria.setNombre()
        setTimeout(() => {
          this.menuPaciente(paciente,cliente);
        }, 2000);
        break;
      case 4:
        console.log("Opción 4: Borrar Paciente");
        //borrarPaciente()
        setTimeout(() => {
          this.menuPaciente(paciente,cliente);
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
        "5 - Volver al menu principal\n" +
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
        this.veterinaria.listaProvedores.forEach((listaProveedores) => {
          console.log(`Registro de informacion de Proveedores: Nombre: ${listaProveedores.getNombre()}, Telefono: ${listaProveedores.getTelefono()}, Id: ${listaProveedores.getId()}.\n`)
          });
        setTimeout(() => {
          this.menuProveedores(proveedor);

      }, 3000);
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Proveedor");
        //agregarProveedores()
        this.veterinaria.agregarProveedor5()
        setTimeout(() => {
          this.menuProveedores(proveedor);
      }, 1000);
        break;
      case 3:
        console.log("Opción 3: Modificar Proveedor");
        //modificarProveedores
        setTimeout(() => {
          this.menuProveedores(proveedor);
      }, 1000);
        break;
      case 4:
        console.log("Opción 4: Borrar Proveedor");
        this.veterinaria.darDeBajaProveedor()
        setTimeout(() => {
          this.menuProveedores(proveedor);
      }, 1000);
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
        "5 - Volver al menu principal\n" +
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
          console.log(`Registro de informacion sucursales: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}, Mascotas: ${listaClientes.mascotas.map(mascota=>mascota.getNombre())}.\n`)
      });

       setTimeout(() => {
          this.menuClientes(cliente);
      }, 3000);
        break;
      case 2:
        console.log("Opción 2: Agregar nuevo Cliente");
        this.veterinaria.agregarCliente5()
        setTimeout(() => {
          this.menuClientes(cliente);
      }, 1000);
        break;
      case 3:
        console.log("Opción 3: Modificar Cliente");
        this.veterinaria.cambioNombreCliente()
        setTimeout(() => {
          this.menuClientes(cliente);
      }, 1000);
        break;
      case 4:
        console.log("Opción 4: Borrar Cliente");
        this.veterinaria.darDeBajaCliente()
        setTimeout(() => {
          this.menuClientes(cliente);
      }, 1000);
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
 /* agregarMenuPaciente(){
     let id = rls.questionInt("Escriba el Id del duenio: ")
     let pos = this.veterinaria.listaClientes.findIndex(cliente=>cliente.getId()==id)
    this.veterinaria.agregarPaciente(this.cliente[pos])
    //this.cliente[id].setMascotas()
    let pregunta = rls.questionInt("Quiere agregar una mascota? 1-SI 2-NO: ")
        while(pregunta===1){
            this.veterinaria.agregarPaciente(this.cliente[pos])
            
            pregunta = rls.questionInt("Quiere agregar otra mascota? 1-SI 2-NO: ")
        }
  }*/


}