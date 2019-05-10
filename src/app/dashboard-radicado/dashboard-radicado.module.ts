import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';

/**
 * Imports 
 */
import * as fromContainers from './containers'
import * as fromComponents from "./components";


@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    TableModule,
    MessageService
  ],
  bootstrap: [...fromContainers.containers]

})
export class DashboardRadicadoModule { }
