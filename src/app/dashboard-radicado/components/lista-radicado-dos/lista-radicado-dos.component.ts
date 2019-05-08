import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';
import { DataTable } from "primeng/primeng";
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { ListaRadicadoService } from '../../service';

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
  loadRadicadoReclamo2: RadicadoModel

  @Input()
  loadEstados: EstadoRadicadoModel[]

  @Input()
  loading: boolean = true;

  @Output()
  onEditEstado = new EventEmitter<any>();


  /**
   * Events
   */

  loadRadicadoReclamo$ = environment

  /**
   * Atributos
   */

  brands: EstadoRadicadoModel[];
  cars2: any[];

  estadoClonado: { [s: string]: any;} = {}

  constructor(private listaService: ListaRadicadoService) { }

  ngOnInit() {
  }

  /**
   * Metodo que inicia el editable de la tabla, crea un objeto copia del seleccionado
   * @param loadRadicadoReclamo 
   */
  onRowEditInit(loadRadicadoReclamo: RadicadoModel) {
    this.estadoClonado['loadRadicadoReclamo'] = {
      ...loadRadicadoReclamo
    };
    console.log( this.estadoClonado)


  }

  /**
   * Cancelación del editable, inserta el objeto copia en el indice seleccionado
   * @param loadRadicadoReclamo 
   * @param index 
   */

  onRowEditCancel(loadRadicadoReclamo: any, index: number) {
    this.loadRadicadoReclamo2[index].estado_radicado.estado = this.estadoClonado['loadRadicadoReclamo'].estado_radicado.estado;
    this.loadRadicadoReclamo2[index].justificacion = this.estadoClonado['loadRadicadoReclamo'].justificacion;

    console.log(loadRadicadoReclamo)
    delete  this.estadoClonado['loadRadicadoReclamo'];
  }

  /**
   * Metodo que edita el estado de la tabla dandole un id
   * @param id 
   */

  onRowEditSave(id: number) {
    this.onEditEstado.emit(id)
  }

}
