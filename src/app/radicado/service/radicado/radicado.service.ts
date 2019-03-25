import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**Environment */
import { environment } from '../../../../environments/environment';

/**Models */
import { tipoPqrsModel } from '../../../shared/models/tipoPQRS.Model';
import { RadicadoModel } from '../../../shared/models/radicado.Model';


@Injectable()
export class RadicadoService {

  constructor(private http: HttpClient) {}

  /**
   * Services to get all TipoPQRS
   */

  getTipoPQRS():Observable<tipoPqrsModel>{
    return this.http.get<tipoPqrsModel>(`${environment.apiUrl}/radicado/get-tipo-pqrs`)
  }

  /**
   * Service to Send the Radicado
   */

  //  CreateRadicado(data:RadicadoModel,id:number)

}
