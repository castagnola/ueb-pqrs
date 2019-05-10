import { tipoPqrsModel } from "./tipoPQRS.Model";

export interface RadicadoModel{
id?:number
    fecha_radicado?: number,
    id_usuario?:number,
    id_estado_radicado?: number,
    nombre?: string,
    correo?: string,
    telefono?:number,
    numero_radicado?: string,
    id_tipo_pqrs?:tipoPqrsModel,
    comentarios?:string,
    anexo?:string,
    justificacion?:string,
    identificacion?:string,
    estado_radicado?:any,
    usuario?:any
}