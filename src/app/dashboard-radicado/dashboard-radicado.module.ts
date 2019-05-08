import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRadicadoComponent } from './components/lista-radicado/lista-radicado.component';
import {MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';

/**
 * 
 */
import * as fromContainers from './containers'
import * as fromComponents from "./components";
import { ListaRadicadoDosComponent } from './components/lista-radicado-dos/lista-radicado-dos.component';
import { ListaRadicadoTresComponent } from './components/lista-radicado-tres/lista-radicado-tres.component';
import { ListaRadicadoCuatroComponent } from './components/lista-radicado-cuatro/lista-radicado-cuatro.component';

@NgModule({
  declarations: [   ...fromContainers.containers, ListaRadicadoDosComponent, ListaRadicadoTresComponent, ListaRadicadoCuatroComponent],
  imports: [
    CommonModule,
    TableModule,
    MessageService
  ],
  bootstrap: [...fromContainers.containers]

})
export class DashboardRadicadoModule { }
