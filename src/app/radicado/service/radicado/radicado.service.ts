import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**Environment */
import { environment } from '../../../../environments/environment';

/**Models */
import { tipoPqrsModel } from '../../../shared/models/tipoPQRS.Model';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { AuxRadicadoService } from '../../../shared/services/radicado/auxRadicado.service';


@Injectable()
export class RadicadoService {

  constructor(private http: HttpClient, private auxRservice: AuxRadicadoService ) {}

  /**
   * Services to get all TipoPQRS
   */

  getTipoPQRS():Observable<tipoPqrsModel>{
    return this.http.get<tipoPqrsModel>(`${environment.apiUrl}/radicado/get-tipo-pqrs`)
  }

  /**
   * Service to Send the Radicado
   */

   CreateRadicado(data:RadicadoModel):Observable<RadicadoModel>{
     this.auxRservice.transformRequestAuxRadicado(data);
     return this.http.post<RadicadoModel>(`${environment.apiUrl}/radicado/create-radicado`,data)
   }

}
