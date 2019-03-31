import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token) {

    this.set(token)
    console.log(this.isValid())
  }

  set(token) {
    localStorage.setItem('token', token)
  }

  get() {
    return localStorage.getItem('token')
  }

  remove() {
    localStorage.removeItem('token')
  }

  /**
   * Method que  verifica si tenemos el token o no
   */
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return (payload.iss === "http://localhost/api-ueb/public/api/auth/login") ? true : false;
      }
    }
    return false;

  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload)
  }

  decode(payload) {

    return JSON.parse(atob(payload));
  }

  /**
   * Si todo esta bien deberia loggear
   */
  loggedIn() {
    return this.isValid();
  } 

}
