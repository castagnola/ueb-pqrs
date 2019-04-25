import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';
import { DataTable } from "primeng/primeng";

@Component({
  selector: 'app-lista-radicado-dos',
  templateUrl: './lista-radicado-dos.component.html',
  styleUrls: ['./lista-radicado-dos.component.css']
})
export class ListaRadicadoDosComponent implements OnInit {

  @ViewChild("dt")
  dt: DataTable;

   /**
   * Properties
   */

  @Input()
  loadRadicadoReclamo: RadicadoModel

  @Input()
  loading: boolean = true;

  /**
   * Events
   */

 

  loadRadicadoReclamo$ = environment
  constructor() { }

  ngOnInit() {
  }

}
