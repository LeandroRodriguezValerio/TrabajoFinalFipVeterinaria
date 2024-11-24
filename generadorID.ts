import { Veterinaria } from "./veterinaria";
export class ID extends Veterinaria  {

    buscarId(Id:number){
        if(this.listaClientes.findIndex(Cliente=>Cliente.getId()===Id)||this.listaProvedores.findIndex(Proveedor=>Proveedor.getId()===Id)||this.listaPacientes.findIndex(Paciente=>Paciente.getId()===Id)){
            return true
        }
    
    }
    generarIDRandom() {
        let numeroRandom = Math.random() * 10;
        while (this.buscarId(numeroRandom)==true){
            numeroRandom = Math.random() * 10;
        } 
        return Math.round(numeroRandom)
        ;
    }
    


}