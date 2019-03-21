import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { LoginComponent } from './login';
import { AppWrapperComponent } from './app-wrapper/containers';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login/service';
import { AppWrapperModule } from './app-wrapper/app-wrapper.module';







@NgModule({
    imports: [
        
        AppRoutes,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
    
    ],
    declarations: [AppComponent, LoginComponent
    ],

    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
