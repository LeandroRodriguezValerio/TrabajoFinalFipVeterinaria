import { Dato } from "./Dato";
import { Id } from "./intefazId";
import { Paciente } from "./Pacientes";
import { Veterinaria } from "./Veterinaria";


export class Cliente extends Dato {
    public nombre: string;
    public telefono: number;
    public id: number;
    public vip: boolean;
    public cantidadVisitas: number;
    public mascotas :Paciente [];
    constructor(nombre: string, telefono: number, cantidadVisitas: number, mascotas?:Paciente[] ) {
        super(nombre)
        this.nombre = nombre;
        this.telefono = telefono;
        this.id=this.generarNumRandom();
        this.cantidadVisitas = cantidadVisitas;
        if(cantidadVisitas>=5){
            this.vip=true
        }else{
            this.vip=false
        }
        if(mascotas!=undefined){
            this.mascotas= mascotas
        }else{
            this.mascotas=[]
        }
    }
  }

<<<<<<< HEAD
  public getNombre(): string {
    return this.nombre;
  }
  public getTelefono(): number {
    return this.telefono;
  }
  public getId(): number {
    return this.id;
  }
  public getVip(): boolean {
    return this.vip;
  }
  public getCantidadVisitas(): number {
    return this.cantidadVisitas;
  }
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }
  public setTelefono(telefono: number) {
    this.telefono = telefono;
  }
  public setId(id: number) {
    this.id = id;
  }
  public setCantidadVisitas(cantidadVisitas: number) {
    this.cantidadVisitas = cantidadVisitas;
  }
}
=======
    public getTelefono(): number {
        return this.telefono;
    }
    public getVip(): boolean {
        return this.vip;
    }
    public getCantidadVisitas(): number {
        return this.cantidadVisitas;
    }
    public getMascotas():Paciente[]{
        return this.mascotas;
    }
    public setTelefono(telefono: number) {
        this.telefono = telefono;
    }
    public setCantidadVisitas(cantidadVisitas: number) {
        this.cantidadVisitas = cantidadVisitas;
    }
    public setMascotas(mascotas:Paciente){
        this.mascotas.push(mascotas)
    }
}
>>>>>>> f8c4ef544e3d32bcc62c075161d3d9e793aac92c
