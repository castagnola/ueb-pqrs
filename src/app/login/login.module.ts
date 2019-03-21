import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './service/login/login.service';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      
    ],
    declarations:[
        LoginComponent,
        
    ],
    providers: [
        LoginService
       
    ],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
