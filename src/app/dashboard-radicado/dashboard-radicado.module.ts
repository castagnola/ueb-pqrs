import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRadicadoComponent } from './components/lista-radicado/lista-radicado.component';

/**
 * 
 */
import * as fromContainers from './containers'
import * as fromComponents from "./components";
import { ListaRadicadoDosComponent } from './components/lista-radicado-dos/lista-radicado-dos.component';

@NgModule({
  declarations: [   ...fromContainers.containers, ListaRadicadoDosComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [...fromContainers.containers]

})
export class DashboardRadicadoModule { }
