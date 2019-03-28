import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/**
 * Models
 */
import { RadicadoModel } from "../../models/radicado.Model";


@Injectable()
export class AuxRadicadoService {
    constructor(private http: HttpClient) { }

    /**
     * Method to transform the date in the Request
     * @param auxRadi data recicibida con los atributos a transformar
     */

    transformRequestAuxRadicado(
        auxRadi: RadicadoModel): RadicadoModel {
        return {
            ...auxRadi,
            fecha_radicado: auxRadi.fecha_radicado / 1000
        };
    }

    /**
     * Method to transform the date in the Response
     * @param auxRadi  data recicibida con los atributos a transformar
     */
    transformResponseAuxRadicado(
        auxRadi: RadicadoModel): RadicadoModel {
        return {
            ...auxRadi,
            fecha_radicado: auxRadi.fecha_radicado * 1000
        };
    }
}