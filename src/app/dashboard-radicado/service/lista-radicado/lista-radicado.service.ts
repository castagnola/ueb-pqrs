import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**Environment */
import { environment } from '../../../../environments/environment';
import { RadicadoModel } from '../../../shared/models/radicado.Model';


@Injectable({
  providedIn: 'root'
})
export class ListaRadicadoService {

  constructor(private http: HttpClient) { }

  /**
   * servicio para la lista de radicados por petición
   */

  getListaRadicadoByPeticion(): Observable<RadicadoModel> {
    return this.http.get<RadicadoModel>(`${environment.apiUrl}/dashboard-radicado/get-lista-radicado`)
  }

  /**
   * servicio para la lista de radicados por reclamo
   */

  getListaRadicadoByReclamo(): Observable<RadicadoModel> {
    return this.http.get<RadicadoModel>(`${environment.apiUrl}/dashboard-radicado/get-lista-radicado-reclamo`)
  }

    /**
   * servicio para la lista de radicados por sugerencia
   */
  getListaRadicadoBySugerencia():Observable<RadicadoModel> {
    return this.http.get<RadicadoModel>(`${environment.apiUrl}/dashboard-radicado/get-lista-radicado-sugerencia`)
  }

  /**
   * servicio para la lista de radicados por queja
   */

  getListaRadicadoByQueja(): Observable<RadicadoModel> {
    return this.http.get<RadicadoModel>(`${environment.apiUrl}/dashboard-radicado/get-lista-radicado-queja`)
  }

  onEditEstadoById(data: RadicadoModel): Observable<RadicadoModel> {
    return this.http.post<RadicadoModel>(`${environment.apiUrl}/dashboard-radicado/edit-estado-radicado/${data.id}`, data)
  }

}
