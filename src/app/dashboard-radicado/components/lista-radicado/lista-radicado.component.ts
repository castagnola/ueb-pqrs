import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-lista-radicado',
  templateUrl: './lista-radicado.component.html',
  styleUrls: ['./lista-radicado.component.css']
})
export class ListaRadicadoComponent implements OnInit {
  selectedCar: RadicadoModel;



   /**
   * Properties
   */

  @Input()
  loadRadicado: RadicadoModel

  @Input()
  loading: boolean = true;

  /**
   * Events
   */

 

  loadRadicado$ = environment


  constructor() { }

  ngOnInit() {
    
  }

  

}
