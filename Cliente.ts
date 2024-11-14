export class Cliente {
    public nombre: string;
    public telefono: number;
    public id: number;
    public vip: boolean;
    public cantidadVisitas: number;

    constructor(nombre: string, telefono: number, id: number, cantidadVisitas: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.cantidadVisitas = cantidadVisitas;
        if(cantidadVisitas>=5){
            this.vip=true
        }else{
            this.vip=false
        }
    }

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