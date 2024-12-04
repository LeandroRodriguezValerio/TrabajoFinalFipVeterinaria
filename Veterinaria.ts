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
        let nuevoNombre: string = rls.question("Escriba el nuevo nombre: ")
        this.nombre = nuevoNombre;
    }
    //-----------------------------------------CLIENTES
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
        let telefono = rls.questionInt("Escriba el nuevo numero: ")
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
    
           do {
            let posPac = this.listaPacientes.findIndex(Pacientes => Pacientes.getId() === numId);
                 this.listaPacientes.splice(posPac, 1)
            } while (this.listaPacientes.find(Pacientes => Pacientes.getId() === numId));
        }
    }

    setDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion;
    }
    setId(nuevoId: number): void {
        this.id = nuevoId;
    }

    public agregarCliente(cliente: Cliente): void {
        this.listaClientes.push(cliente);
    }
    agregarCliente5() {
        let nombre: string = rls.question("Escriba su nombre: ")
        let telefono: number = rls.questionInt("Escriba su telefono: ")
        let visitas: number = rls.questionInt("Escriba la cantidad de visitas: ")
        let cliente5 = new Cliente(nombre, telefono, visitas)
        //this.agregarCliente(cliente5)

        do {
            cliente5 = new Cliente(nombre, telefono, visitas)
        } while (this.listaClientes.some(cliente => cliente.getId() == cliente5.getId()) || this.listaProvedores.some(Proveedor => Proveedor.getId() == cliente5.getId()) || this.listaSucursal.some(suc => suc.getId() == cliente5.getId()));
        this.listaClientes.push(cliente5)
    }
    mostrarMascotaCliente(id: number): void {
        console.log(this.listaClientes.find(cliente => cliente.getId() == id))
        console.log(this.listaMascota.filter(paciente => paciente.getId() == id))

    }
    //--------------------------------MASCOTAS / PACIENTES
    agregarMascota(mascota: Paciente) {
        this.listaPacientes.push(mascota)

    }
    borrarPaciente() {

        this.listaPacientes.forEach((listaPacientes) => {
            console.log(`Registro de informacion pacientes: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}\n`)

        });
        let nombre: string = rls.question("Escriba el nombre del paciente a quitar : ")
        let id: number = rls.questionInt("Escriba el id del paciente a quitar : ")
        let posId = this.listaClientes.findIndex(Cliente => Cliente.getId() === id);
        let posPac = this.listaPacientes.findIndex(Pacientes => Pacientes.getNombre() === nombre);
        this.listaClientes[posId].buscarPaciente(nombre)
        this.listaPacientes.splice(posPac, 1)
    }
    agregarPaciente() {
        this.listaClientes.forEach((listaClientes) => {
            console.log(`Registro de informacion Clientes: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}, Nombre Mascota:${listaClientes.mascotas.map(mascota => mascota.getNombre())}\n`)
        });
        let nombreMascota = rls.question("Escriba el nombre de la mascota: ")
        let especie = rls.question("Escriba especie si es perro, gato o exotica: ")
        if (especie === "perro") {
            especie = "Perro"
        } else if (especie === "gato") {
            especie = "Gato"
        } else {
            especie = "Exotico"
        }
        let idDueño = rls.questionInt("Escriba el Id del duenio: ")
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
            console.log(`Registro de informacion Cliente: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a modificar la especie: ")
        let pos = this.listaPacientes.findIndex(paciente => paciente.getId() === numId);
        let especie = rls.question("Escriba la nueva especie: ")
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


        do {
            sucursal2 = new Sucursal(nombre, direccion)
        } while (this.listaClientes.some(cliente => cliente.getId() == sucursal2.getId()) || this.listaProvedores.some(Proveedor => Proveedor.getId() == sucursal2.getId()) || this.listaSucursal.some(suc => suc.getId() == sucursal2.getId()));
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
    agregarProveedor(): void {
        let nombre: string = rls.question("Escriba su nombre del Proveedor: ")
        let telefono: number = rls.questionInt("Escriba el telefono del Proveedor: ")
        let proveedor = new Proveedor(nombre, telefono)
        //this.listaProvedores.push(proveedor);

        do {
            proveedor = new Proveedor(nombre, telefono)
        } while (this.listaClientes.some(cliente => cliente.getId() == proveedor.getId()) || this.listaProvedores.some(Proveedor => Proveedor.getId() == proveedor.getId()) || this.listaSucursal.some(suc => suc.getId() == proveedor.getId()));
        this.listaProvedores.push(proveedor)

    }
    cambioTelefonoProveedores(): void {
        this.listaProvedores.forEach((listaProvedores) => {
            console.log(`Registro de informacion Proveedores: Nombre: ${listaProvedores.getNombre()}, Telefono: ${listaProvedores.getTelefono()}, Id: ${listaProvedores.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id del Proveedor a modificar el telefono: ")
        let pos = this.listaProvedores.findIndex(proveedor => proveedor.getId() === numId);
        let telefono = rls.questionInt("Escriba el nuevo numero: ")
        if (pos == -1) {
            console.log("No hay clientes con ese Id")
        } else {
            this.listaProvedores[pos].setTelefono(telefono);
            this.listaProvedores.forEach((listaProvedores) => {
                console.log(`Registro de informacion Proveedores: Nombre: ${listaProvedores.getNombre()}, Telefono: ${listaProvedores.getTelefono()}, Id: ${listaProvedores.getId()}.\n`)
            });
        }
    }
    cambioNombreProveedores(): void {
        this.listaProvedores.forEach((listaProvedores) => {
            console.log(`Registro de informacion Proveedor: Nombre: ${listaProvedores.getNombre()}, Telefono: ${listaProvedores.getTelefono()}, Id: ${listaProvedores.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaProvedores.findIndex(proveedor => proveedor.getId() === numId);
        if (pos == -1) {
            console.log("No hay Proveedor con ese Id")
        } else {
            this.listaProvedores[pos].setNombre();
            this.listaProvedores.forEach((listaProvedores) => {
                console.log(`Registro de informacion Proveedor: Nombre: ${listaProvedores.getNombre()}, Telefono: ${listaProvedores.getTelefono()}, Id: ${listaProvedores.getId()}.\n`)
            });
        }
    }
    public darDeBajaProveedor() {
        this.listaProvedores.forEach((listaProvedores) => {
            console.log(`Registro de informacion Proveedor: Nombre: ${listaProvedores.getNombre()}, Telefono: ${listaProvedores.getTelefono()}, Id: ${listaProvedores.getId()}.\n`)
        });
        let numId: number = rls.questionInt("Escriba el Id a borrar Proveedor: ")
        let pos = this.listaProvedores.findIndex(proveedor => proveedor.getId() === numId);
        if (pos == -1) {
            console.log("No hay Proveedor con ese Id")
        } else {
            this.listaProvedores.splice(pos, 1);
        }
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