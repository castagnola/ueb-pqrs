import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRadicadoComponent } from './components/lista-radicado/lista-radicado.component';

/**
 * 
 */
import * as fromContainers from './containers'
import * as fromComponents from "./components";

@NgModule({
  declarations: [   ...fromContainers.containers],
  imports: [
    CommonModule
  ],
  bootstrap: [...fromContainers.containers]

})
export class DashboardRadicadoModule { }
