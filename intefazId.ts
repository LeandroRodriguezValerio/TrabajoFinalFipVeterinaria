import { Paciente } from "./Pacientes"

export interface Id {
    generarNumRandom():number;
    setNumRandom(paciente:Paciente):void;
}