import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';
import { DataTable } from "primeng/primeng";


@Component({
  selector: 'app-lista-radicado-tres',
  templateUrl: './lista-radicado-tres.component.html',
  styleUrls: ['./lista-radicado-tres.component.css']
})
export class ListaRadicadoTresComponent implements OnInit {

  @ViewChild("dt")
  dt: DataTable;

   /**
   * Properties
   */

  @Input()
  loadRadicadoQueja: RadicadoModel

  @Input()
  loading: boolean = true;

  /**
   * Events
   */

 

  loadRadicadoQueja$ = environment
  constructor() { }

  ngOnInit() {
  }

}
