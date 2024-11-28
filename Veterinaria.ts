import { Cliente } from "./Cliente"
import { Proveedor } from "./proveedores";
import { Paciente } from "./Pacientes";
import { Id } from "./intefazId";
import { Sucursal } from "./sucursal";
import * as rls from "readline-sync";
import { Menu } from "./Menu";
export class Veterinaria implements Id {
    private nombre: string;
    private direccion: string;
    private id: number;
    public listaClientes: Cliente[] = [];
    public listaPacientes: Paciente[] = [];
    public listaProvedores: Proveedor[] = [];
    public listaSucursal: Sucursal[] = []
    public listaMascota: Paciente[] = []
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
    getListaPacientes(): Paciente[] {
        return this.listaPacientes
    }
    getListaProveedores(): Proveedor[] {
        return this.listaProvedores
    }
    getListaSucursal(): Sucursal[] {
        return this.listaSucursal
    }
    getListaMascota(): Paciente[] {
        return this.listaMascota
    }

    //setters
    public setNombre() {
        let nuevoNombre: string = rls.question("Escriba el numero nombre: ")
        this.nombre = nuevoNombre;
    }

    cambioNombreCliente(): void {
        this.listaClientes.forEach((listaClientes) => {
            console.log(`Registro de informacion Cliente: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaClientes.findIndex(cliente => cliente.getId() === numId);
        if (pos == -1) {
            console.log("No hay clientes con ese Id")
        } else {
            this.listaClientes[pos].setNombre();
            this.listaClientes.forEach((listaClientes) => {
                console.log(`Registro de informacion Cliente: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
            });
        }
    }
    
    cambioTelefonoCliente(): void {
        this.listaClientes.forEach((listaClientes) => {
            console.log(`Registro de informacion Cliente: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id del cliente a modificar el telefono: ")
        let pos = this.listaClientes.findIndex(cliente => cliente.getId() === numId);
        let telefono= rls.questionInt("Escriba el nuevo numero: ")
        if (pos == -1) {
            console.log("No hay clientes con ese Id")
        } else {
            this.listaClientes[pos].setTelefono(telefono);
            this.listaClientes.forEach((listaClientes) => {
                console.log(`Registro de informacion sucursales: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
            });
        }
    }
    // Método para eliminar cliente
    public darDeBajaCliente() {
        this.listaClientes.forEach((listaClientes) => {
            console.log(`Registro de informacion sucursales: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a borrar cliente: ")
        let pos = this.listaClientes.findIndex(cliente => cliente.getId() === numId);
        if (pos == -1) {
            console.log("No hay clientes con ese Id")
        } else {
            this.listaClientes.splice(pos, 1);
        }
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

    agregarCliente5() {
        let nombre: string = rls.question("Escriba su nombre: ")
        let telefono: number = rls.questionInt("Escriba su telefono: ")
        let visitas: number = rls.questionInt("Escriba la cantidad de visitas: ")
        let cliente5 = new Cliente(nombre, telefono, visitas)
        this.agregarCliente(cliente5)
    }

    mostrarMascotaCliente(id: number): void {
        console.log(this.listaClientes.find(cliente => cliente.getId() == id))
        console.log(this.listaMascota.filter(paciente => paciente.getId() == id))

    }
    agregarMascota(mascota: Paciente) {
        this.listaPacientes.push(mascota)

    }
    borrarPaciente() {

        this.listaPacientes.forEach((listaPacientes) => {
            console.log(`Registro de informacion pacientes: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}\n`)
        });
        let nombre: string = rls.question("Escriba e nombre del paciente a quitar : ")
        let pos = this.listaPacientes.findIndex(Pacientes => Pacientes.getNombre() === nombre);
        if (pos == -1) {
            console.log("No hay pacientes con ese Id")
        } else {
          //  this.listaClientes[pos].eliminarPaciente(pos);
            this.listaClientes.findIndex(Cliente => Cliente.eliminarPaciente(pos))
            this.listaPacientes.splice(pos,1)
            
        }
    }
    agregarPaciente() {
        let nombreMascota = rls.question("Escriba el nombre de la mascota: ")
        let especie = rls.question("Escriba especie si es perro, gato o exotica:")
        let idDueño = rls.questionInt("Escriba el Id del duenio")
        let mascota1 = new Paciente(nombreMascota, especie, idDueño)
        this.agregarMascota(mascota1)
        let pos = this.listaClientes.findIndex(listaClientes => listaClientes.getId() === idDueño);
        if (pos == -1) {
            console.log("No hay dueños con ese id")
        } else {
            this.listaClientes[pos].setMascotas(mascota1);
        }
    }

    agregarSucursal(sucursal: Sucursal) {
        this.listaSucursal.push(sucursal)
    }
    agregarProveedor(proveedor: Proveedor): void {
        this.listaProvedores.push(proveedor);
    }
    generarNumRandom(): number {
        let numeroRandom = Math.random() * 100;
        return Math.round(numeroRandom);
    }
    setNumRandom(paciente: Paciente) {
        let num = this.generarNumRandom()
        paciente.setId(num);
    }

}