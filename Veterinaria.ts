import { Cliente } from "./Cliente"
import { Proveedor } from "./proveedores";
import { Paciente } from "./Pacientes";
import { Id } from "./intefazId";
import { Sucursal } from "./sucursal";
import * as rls from "readline-sync";
import { Menu } from "./Menu";
export class Veterinaria implements Id{
    private nombre: string;
    private direccion: string;
    private id: number;
    private listaClientes: Cliente[] = [];
    private listaPacientes: Paciente[] = [];
    private listaProvedores: Proveedor[] = [];
    private listaSucursal :Sucursal[]=[]
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
        return this.listaClientes
    }
    getListaPacientes():Paciente[]{
        return this.listaPacientes
    }
    getListaProveedores():Proveedor[]{
        return this.listaProvedores
    }
    getListaSucursal():Sucursal[]{
        return this.listaSucursal
    }
    
    //setters
    public setNombre() {
        let nuevoNombre: string = rls.question("Escriba el numero nombre: ")
        this.nombre = nuevoNombre;
    }
    setDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion;
    }
    setId(nuevoId: number): void {
        this.id = nuevoId;
    }
    //metodos TODAVIA POR ARREGLAR
    public agregarCliente(cliente: Cliente): void {
        this.listaClientes.push(cliente);
    }
    agregarPaciente() {
        this.listaClientes.forEach((listaClientes) => {
            console.log(`Registro de informacion Clientes: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}, Nombre Mascota:${listaClientes.mascotas.map(mascota => mascota.getNombre())}\n`)
  
          });
        let nombreMascota = rls.question("Escriba el nombre de la mascota: ")
        let especie = rls.question("Escriba especie si es perro, gato o exotica:")
        let idDueño = rls.questionInt("Escriba el Id del duenio:")
        let mascota1 = new Paciente(nombreMascota, especie, idDueño)
        this.agregarMascota(mascota1)
        let pos = this.listaClientes.findIndex(listaClientes => listaClientes.getId() === idDueño);
        if (pos == -1) {
            console.log("No hay dueños con ese id")
        } else {
            this.listaClientes[pos].setMascotas(mascota1);
           
        }
    }
    cambioNombrePaciente(): void {
        this.listaPacientes.forEach((listaPacientes) => {
            console.log(`Registro de informacion Cliente: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaPacientes.findIndex(paciente => paciente.getId() === numId);
        if (pos == -1) {
            console.log("No hay paciente con ese Id")
        } else {
            this.listaPacientes[pos].setNombre();
            this.listaPacientes.forEach((listaPacientes) => {
                console.log(`Registro de informacion Pacientes: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}.\n`)
            });
        }
    }
    cambioEspeciePaciente(): void {
        this.listaPacientes.forEach((listaPacientes) => {
            console.log(`Registro de informacion Cliente: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}.}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a modificar la especie: ")
        let pos = this.listaPacientes.findIndex(paciente => paciente.getId() === numId);
        let especie= rls.question("Escriba la nueva especie: ")
        if (pos == -1) {
            console.log("No hay paciente con ese Id")
        } else {
            this.listaPacientes[pos].setEspecie(especie);
            this.listaPacientes.forEach((listaPacientes) => {
                console.log(`Registro de informacion Pacientes: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}.\n`)
            });
        }
    }
 //------------------------------------------ SUCURSAL
    agregarSucursal() {
        let nombre: string = rls.question("Escriba su nombre de la sucursal: ")
        let direccion: string = rls.question("Escriba la direccion de la sucursal: ")
        let sucursal2 = new Sucursal(nombre, direccion)
        this.listaSucursal.push(sucursal2)
    }
    cambioNombreSucursal(): void {
        this.listaSucursal.forEach((listaSucursal) => {
            console.log(`Registro de informacion Sucursal: Nombre: ${listaSucursal.getNombre()}, Direccion: ${listaSucursal.getDireccion()}, Id: ${listaSucursal.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id de la sucursal a modificar el nombre: ")
        let pos = this.listaSucursal.findIndex(sucursal => sucursal.getId() === numId);
        if (pos == -1) {
            console.log("No hay sucursal con ese Id")
        } else {
            this.listaSucursal[pos].setNombre();
            this.listaSucursal.forEach((listaSucursal) => {
                console.log(`Registro de informacion Sucursal: Nombre: ${listaSucursal.getNombre()}, Direccion: ${listaSucursal.getDireccion()}, Id: ${listaSucursal.getId()}.\n`)
            });
        }
    }
    cambioDireccionSucursal(): void {
        this.listaSucursal.forEach((listaSucursal) => {
            console.log(`Registro de informacion Sucursal: Nombre: ${listaSucursal.getNombre()}, Direccion: ${listaSucursal.getDireccion()}, Id: ${listaSucursal.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id de la sucursal a modificar la direccion: ")
        let pos = this.listaSucursal.findIndex(sucursal => sucursal.getId() === numId);
        if (pos == -1) {
            console.log("No hay sucursal con ese Id")
        } else {
            let nuevaDireccion: string = rls.question("Escriba la nueva direccion: ")
            this.listaSucursal[pos].setDireccion(nuevaDireccion);
            this.listaSucursal.forEach((listaSucursal) => {
                console.log(`Registro de informacion Sucursal: Nombre: ${listaSucursal.getNombre()}, Direccion: ${listaSucursal.getDireccion()}, Id: ${listaSucursal.getId()}.\n`)
            });
        }
    }
    public darDeBajaSucursal() {
        this.listaSucursal.forEach((listaSucursal) => {
            console.log(`Registro de informacion sucursales: Nombre: ${listaSucursal.getNombre()}, Direccion: ${listaSucursal.getDireccion()}, Id: ${listaSucursal.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a borrar Sucursal: ")
        let pos = this.listaSucursal.findIndex(Sucursal => Sucursal.getId() === numId);
        if (pos == -1) {
            console.log("No hay Sucursal con ese Id")
        } else {
            this.listaSucursal.splice(pos, 1);
        }
    }
    
    
 //-------------------------------------------- PROVEEDOR
    agregarProveedor() {
        let nombre: string = rls.question("Escriba nombre del proveedor: ")
        let telefono: number = rls.questionInt("Escriba el telefono del proveedor: ")
        let proveedor2 = new Proveedor(nombre, telefono)
        this.listaProvedores.push(proveedor2);
    }
    generarNumRandom():number {
        let numeroRandom = Math.random() * 100;
        return Math.round(numeroRandom);
    }
    setNumRandom(paciente:Paciente) {
        let num =this.generarNumRandom()
        paciente.setId(num);
    }
}