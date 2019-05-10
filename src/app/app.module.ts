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
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { RadicadoService } from './radicado/service/radicado/radicado.service';
import { DropdownModule } from 'primeng/dropdown';
import { AuxRadicadoService } from './shared/services/radicado/auxRadicado.service';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';
import { ListaRadicadoService } from './dashboard-radicado/service/lista-radicado/lista-radicado.service';
import { EstadoRadicadoService } from './shared/services/estado-radicado/estado-radicado.service';
import { GenerarRadicadoComponent } from './generar-radicado/components/generar-radicado/generar-radicado.component';

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
        DropdownModule,
        MessagesModule,
        MessageModule,
        SnotifyModule



    ],
    declarations: [AppComponent,
        LoginComponent,
        RadicadoDetalleComponent,
        RadicadoComponent,
        GenerarRadicadoComponent
    ],

    providers: [LoginService, RadicadoService, AuxRadicadoService,ListaRadicadoService,EstadoRadicadoService,
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
