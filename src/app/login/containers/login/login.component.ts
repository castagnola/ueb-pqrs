import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  disable: boolean;
  data: any;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

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
   * Method para ingresar a la app
   */
  onSubmit() {
    console.log(this.form.value);
    this.loginService.login(this.form.value).subscribe(response => {
      data => console.log(response);
      error => console.log(error);
    })
  }

  onRegister(){
    this.loginService.register(this.form.value).subscribe(response=>{
      data => console.log(response,'aca');
      error => console.log(error);
    })
  }

  handleResponse() {
    
  }

}
