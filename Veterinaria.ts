import { Cliente } from "./Cliente"
import { Proveedor } from "./proveedores";
import { Paciente } from "./Pacientes";
import { Id } from "./intefazId";
export class Veterinaria implements Id{
    private nombre: string;
    private direccion: string;
    private id: number;
    private listaClientes: Cliente[] = [];
    private listaPacientes: Paciente[] = [];
    private listaProvedores: Proveedor[] = [];



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

    public agregarCliente(cliente: Cliente): void {
        this.listaClientes.push(cliente);
    }

    agregarPaciente(paciente: Paciente): void {
        this.listaPacientes.push(paciente);
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