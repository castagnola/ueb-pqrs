import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login/login.service';
import { BrowserModule } from '@angular/platform-browser';

import * as fromContainers from './containers'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        ...fromContainers.containers

    ],
    providers: [
        LoginService

    ],
    bootstrap: [...fromContainers.containers]
})
export class LoginModule { }
