import { tipoPqrsModel } from "./tipoPQRS.Model";

export interface RadicadoModel{
    fecha_radicado: number,
    id_usuario?:number,
    identificacion: number,
    nombre: string,
    correo: string,
    telefono:number,
    numero_radicado?: string,
    id_tipo_pqrs:tipoPqrsModel,
    comentarios:string,
    anexo?:string
}