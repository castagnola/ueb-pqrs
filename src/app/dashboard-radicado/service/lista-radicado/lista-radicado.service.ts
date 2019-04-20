import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**Environment */
import { environment } from '../../../../environments/environment';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { UsuarioModel } from '../../../shared/models/Usuario.Model';


@Injectable({
  providedIn: 'root'
})
export class ListaRadicadoService {

  constructor(private http: HttpClient) {}

  /**
   * servicio para la lista de radicados
   */

   getListaRadicadoById():Observable<RadicadoModel>{
      return this.http.get<RadicadoModel>(`${environment.apiUrl}/auth/get-lista-radicado`)
  }

  /**
   * Servicio para la generación del pdf
   * @param event 
   */
  
  generatePdf(event):Observable<any>{
    return this.http.get<any>(`${environment.pdfUrl}InformeCertificadoPqrs.php?codigo=${event}`)
  }
}
