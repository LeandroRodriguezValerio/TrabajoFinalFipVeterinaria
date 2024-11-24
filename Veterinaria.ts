import * as rls from "readline-sync";
import { Cliente } from "./cliente";
import { Proveedor } from "./proveedores";
import { Paciente } from "./pacientes";

export class Veterinaria {
  private nombre: string;
  private direccion: string;
  private id: number;
  protected listaClientes: Cliente[] = [];
  protected listaPacientes: Paciente[] = [];
  protected listaProvedores: Proveedor[] = [];

  constructor(nombre: string, direccion: string, id: number) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id;
  }

  //getters
  getNombre(): string {
    return this.nombre;
  }
  getDireccion(): string {
    return this.direccion;
  }
  getId(): number {
    return this.id;
  }

  getlistaClientes(): Cliente[] {
    return this.listaClientes;
  }
  getlistaPacientes(): Paciente[] {
    return this.listaPacientes;
  }
  getlistaProovedores(): Proveedor[] {
    return this.listaProvedores;
  }

  //setters
  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  setDireccion(nuevaDireccion: string): void {
    this.direccion = nuevaDireccion;
  }
  setId(nuevoId: number): void {
    this.id = nuevoId;
  }

  //metodos TODAVIA POR ARREGLAR

  agregarCliente(cliente: Cliente): void {
    this.listaClientes.push(cliente);
  }

  agregarPaciente(paciente: Paciente): void {
    this.listaPacientes.push(paciente);
  }

  agregarProveedor(proveedor: Proveedor): void {
    this.listaProvedores.push(proveedor);
  }
  //metodos dar de Baja
  public darDeBajaCliente(index: number): void {
    if (index >= 0 && index < this.listaClientes.length) {
      this.listaClientes.splice(index, 1);
    }
  }
  public darDeBajaPaciente(index: number): void {
    if (index >= 0 && index < this.listaPacientes.length) {
      this.listaPacientes.splice(index, 1);
    }
  }
  public darDeBajaProvedor(index: number): void {
    if (index >= 0 && index < this.listaProvedores.length) {
      this.listaProvedores.splice(index, 1);
    }
  }

  //metodo de Modificar
  modificarNombre() {
    let nombre1 = rls.question("Escriba el nombre a buscar");

    let posicionNombre = this.listaClientes.findIndex(
      (Cliente) => Cliente.getNombre() === nombre1
    );

    if (posicionNombre == -1) {
      posicionNombre = this.listaProvedores.findIndex(
        (Proveedor) => Proveedor.getNombre() === nombre1
      );
      if (posicionNombre == -1) {
        posicionNombre = this.listaPacientes.findIndex(
          (Paciente) => Paciente.getNombre() === nombre1
        );
        if (posicionNombre == -1) {
          console.log("No hay nadie con ese nombre");
        } else {
          let nombre2 = rls.question("Escriba el nuevo nombre");
          this.listaPacientes[posicionNombre].setNombre(nombre2);
        }
      } else {
        let nombre2 = rls.question("Escriba el nuevo nombre");
        this.listaProvedores[posicionNombre].setNombre(nombre2);
      }
    } else {
      let nombre2 = rls.question("Escriba el nuevo nombre");
      this.listaClientes[posicionNombre].setNombre(nombre2);
    }
  }

  modificarTelefonoCliente(): void {
    let telefono1 = rls.questionInt("Escriba el telefono a buscar");

    let posicionTelefonoClien = this.listaClientes.findIndex(
      (Cliente) => Cliente.getTelefono() === telefono1
    );

    if (posicionTelefonoClien == -1) {
      console.log("No hay nadie con ese telefono");
    } else {
      let telefono2 = rls.questionInt("Escriba el nuevo telefono");
      this.listaClientes[posicionTelefonoClien].setTelefono(telefono2);
    }
  }

  modificarTelefonoProv(): void {
    let telefono1 = rls.questionInt("Escriba el telefono a buscar");

    let posicionTelefonoProv = this.listaProvedores.findIndex(
      (Proveedor) => Proveedor.getTelefono() === telefono1
    );
    if (posicionTelefonoProv == -1) {
      console.log("No hay nadie con ese telefono");
    } else {
      let telefono2 = rls.questionInt("Escriba el nuevo telefono");
      this.listaProvedores[posicionTelefonoProv].setTelefono(telefono2);
    }
  }
  buscarId(Id: number) {
    if (
      this.listaClientes.findIndex((Cliente) => Cliente.getId() === Id) ||
      this.listaProvedores.findIndex((Proveedor) => Proveedor.getId() === Id) ||
      this.listaPacientes.findIndex((Paciente) => Paciente.getId() === Id)
    ) {
      return true;
    }
  }
  generarIDRandom() {
    let numeroRandom = Math.random() * 10;
    while (this.buscarId(numeroRandom) == true) {
      numeroRandom = Math.random() * 10;
    }
    return Math.round(numeroRandom);
  }
}
