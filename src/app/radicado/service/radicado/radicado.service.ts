import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RadicadoService {

  constructor(private http: HttpClient) { }
}
