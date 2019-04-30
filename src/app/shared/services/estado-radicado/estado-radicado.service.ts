import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**Environment */
import { environment } from '../../../../environments/environment';

/**Models */
import { EstadoRadicadoModel } from '../../models/estadoRadicado.Model';


@Injectable()
export class EstadoRadicadoService {

  constructor(private http: HttpClient) {}

  /**
   * Services to get all Estados
   */

  getAllEstados():Observable<EstadoRadicadoModel[]>{
    return this.http.get<EstadoRadicadoModel[]>(`${environment.apiUrl}/get-all-estados`)
  }

  

}
