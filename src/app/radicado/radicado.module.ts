import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';


import * as fromContainers from './containers'
import * as fromComponents from "./components";
import { RadicadoService } from './service/radicado/radicado.service';
import { RadicadoComponent } from './containers';

@NgModule({
  declarations: [        ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  providers:[
    RadicadoService
  ],
  bootstrap: [...fromContainers.containers]

})
export class RadicadoModule { }
