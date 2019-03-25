import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

/**Environment */
import { environment } from '../../../../environments/environment';

/** Models */
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../../shared/models/UsuarioModel';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    login(data : UsuarioModel): Observable<UsuarioModel> {
        return this.http
            .post<UsuarioModel>(`${environment.apiUrl}/auth/login`,data)
    }
}
