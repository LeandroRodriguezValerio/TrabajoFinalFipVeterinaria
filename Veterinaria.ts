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
       let numId = rls.questionInt("Escriba el numero del paciente: ") 
      if(  this.listaClientes.some(cliente => cliente.getId()===numId)){
       this.listaPacientes.push();
      }else { console.log("No hay paciente con ese id")}
    }
    agregarSucursal(sucursal:Sucursal){
        this.listaSucursal.push(sucursal)
    }
    agregarProveedor(proveedor: Proveedor): void {
        this.listaProvedores.push(proveedor);
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