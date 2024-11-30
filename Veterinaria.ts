import { Cliente } from "./Cliente"
import { Proveedor } from "./proveedores";
import { Paciente } from "./Pacientes";
import { Id } from "./intefazId";
import { Sucursal } from "./sucursal";
import * as rls from "readline-sync";
export class Veterinaria implements Id{
    private nombre: string;
    private direccion: string;
    private id: number;
    public listaClientes: Cliente[] = [];
    public listaPacientes: Paciente[] = [];
    public listaProvedores: Proveedor[] = [];
    public listaSucursal :Sucursal[] = []
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
   

    cambioNombreCliente():void{
        this.listaClientes.forEach((listaClientes) => {
            console.log(`Registro de informacion sucursales: Nombre: ${listaClientes.getNombre()}, Telefono: ${listaClientes.getTelefono()}, Id: ${listaClientes.getId()}.\n`)
        });
          let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaClientes.findIndex(cliente=>cliente.getId() ===numId);
        if (pos==-1) {
            console.log("No hay clientes con ese Id")
        }else{
         this.listaClientes[pos].setNombre();
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
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaClientes.findIndex(cliente=>cliente.getId() ===numId);
            if (pos==-1) {
                console.log("No hay clientes con ese Id")  
                }else{
                    this.listaClientes.splice(pos, 1);
                }
    }
    public darDeBajaSucursal() {
        this.listaSucursal.forEach((listaSucursal) => {
            console.log(`Registro de informacion sucursales: Nombre: ${listaSucursal.getNombre()}, Telefono: ${listaSucursal.getTelefono()}, Id: ${listaSucursal.getId()}.\n`)
            });
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaSucursal.findIndex(Sucursal=>Sucursal.getId() ===numId);
            if (pos==-1) {
                console.log("No hay Sucursales con ese Id")  
                }else{
                    this.listaSucursal.splice(pos, 1);
                }
    }
    public darDeBajaProveedor() {
        this.listaProvedores.forEach((listaProvedores) => {
            console.log(`Registro de informacion sucursales: Nombre: ${listaProvedores.getNombre()}, Telefono: ${listaProvedores.getTelefono()}, Id: ${listaProvedores.getId()}.\n`)
            });
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaProvedores.findIndex(Provedores=>Provedores.getId() ===numId);
    if (pos==-1) {
        console.log("No hay proveedores con ese Id")  
        }else{
            this.listaProvedores.splice(pos, 1);
        }
    }
    public darDeBajaPacientes() {
        this.listaPacientes.forEach((listaPacientes) => {
            console.log(`Registro de informacion sucursales: Nombre: ${listaPacientes.getNombre()}, Especie: ${listaPacientes.getEspecie()}, Id: ${listaPacientes.getId()}\n`)
            });
        let numId: number = rls.questionInt("Escriba el Id a modificar el nombre: ")
        let pos = this.listaPacientes.findIndex(Pacientes=>Pacientes.getId() ===numId);
    if (pos==-1) {
        console.log("No hay pacientes con ese Id")  
        }else{
            this.listaPacientes.splice(pos, 1);
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
    //Metodos de agregar
    agregarCliente5(){
        let nombre: string = rls.question("Escriba su nombre: ")
        let telefono: number = rls.questionInt("Escriba su telefono: ")
        let visitas: number = rls.questionInt("Escriba la cantidad de visitas: ")
        let cliente5= new Cliente(nombre, telefono, visitas)
        this.agregarCliente(cliente5)
        let pregunta = rls.questionInt("Quiere agregar una mascota? 1-SI 2-NO: ")
        while(pregunta===1){
            this.agregarPaciente()
            
            pregunta = rls.questionInt("Quiere agregar otra mascota? 1-SI 2-NO: ")
        }
      }
    agregarMascota(mascota:Paciente) {
        this.listaPacientes.push(mascota)

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
    
    /*agregarPaciente() {
       let numId = rls.questionInt("Escriba el numero del paciente: ") 
      if(  this.listaClientes.some(cliente => cliente.getId()===numId)){
       this.listaPacientes.push();
      }else { console.log("No hay paciente con ese id")}
    }*/

      agregarSucursal5(){
        let nombre: string = rls.question("Escriba el nombre de la sucursal: ")
        let telefono: number = rls.questionInt("Escriba el telefono de la sucursal: ")
        let direccion: string = rls.question("Escriba la direccion de la sucursal: ")
        let sucursal1= new Sucursal(nombre, telefono, direccion)
        this.agregarSucursal(sucursal1)
      }
    agregarProveedor5(){
        let nombre: string = rls.question("Escriba el nombre del proveedor: ")
        let telefono: number = rls.questionInt("Escriba el telefono del proveedor: ")
        let proveedor1= new Proveedor(nombre, telefono)
        this.agregarProveedor(proveedor1)
      }  
    agregarSucursal(sucursal:Sucursal){
        this.listaSucursal.push(sucursal);
    }
    agregarProveedor(proveedor: Proveedor): void {
        this.listaProvedores.push(proveedor);
    }

    //metodos Ranomizadores
    generarNumRandom():number {
        let numeroRandom = Math.random() * 100;
        return Math.round(numeroRandom);
    }
    setNumRandom(paciente:Paciente) {
        let num =this.generarNumRandom()
        paciente.setId(num);
    }
}