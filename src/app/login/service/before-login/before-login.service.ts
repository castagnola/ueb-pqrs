import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn()
 }

  constructor(private token: TokenService) { }
}
