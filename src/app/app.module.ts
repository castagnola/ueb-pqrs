import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { LoginComponent } from './login/containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/service';
import { RadicadoComponent } from './radicado/containers';
import { CardModule } from 'primeng/card';
import { RadicadoDetalleComponent } from './radicado/components';
import { CalendarModule } from 'primeng/primeng';
import { FullCalendarModule } from 'primeng/fullcalendar';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { RadicadoService } from './radicado/service/radicado/radicado.service';
import {DropdownModule} from 'primeng/dropdown';
import { AuxRadicadoService } from './shared/services/radicado/auxRadicado.service';









@NgModule({
    imports: [

        AppRoutes,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        CardModule,
        CalendarModule,
        CardModule,
        FullCalendarModule,
        InputTextModule,
        AutoCompleteModule,
        InputTextareaModule,
        ButtonModule,
        DropdownModule
        


    ],
    declarations: [AppComponent,
        LoginComponent,
        RadicadoDetalleComponent,
        RadicadoComponent
    ],

    providers: [LoginService,RadicadoService,AuxRadicadoService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
