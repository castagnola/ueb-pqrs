import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from '../../service/login/login.service';
import { Message } from 'primeng/primeng';
import { TokenService } from '../../service/token/token.service';
import { tokenKey } from '@angular/core/src/view';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Variables
   */
  form: FormGroup;
  disable: boolean;
  data: any;
  msgs: Message[] = [];

  public error = null;

  constructor
    (private fb: FormBuilder, private loginService: LoginService, private token: TokenService, private route: Router, private auth: AuthService) { }

  ngOnInit() {

    this.createForm();
  }

  /**
   * Campos del Form
   */
  createForm() {
    this.form = this.fb.group({

      identificacion: ["", Validators.required],
      password: ['', Validators.required]
    })
  }

  /**
   * Method penvio del formulario para ellogin
   */

  onSubmit() {
    console.log(this.form.value);
    this.loginService.login(this.form.value).subscribe(
      data => {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Ingreso exitoso!', detail: '' });
        this.handleResponse(data);
        console.log(data)
      },
      error => {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: this.error = error.error.error });
        this.handleError(error);

      }
    );

  }

  onRegister() {
    this.loginService.register(this.form.value).subscribe(
      data2 => console.log(data2, 'Registro'),
      error2 => console.log(error2)
    )
  }

  handleError(error) {
    this.error = error.error.error
  }

  handleResponse(data) {

    this.token.handle(data.access_token),
      this.auth.changeAuthStatus(true),
      this.route.navigateByUrl('/app')
  }

  showErrorViaMessages(error) {

  }

}
