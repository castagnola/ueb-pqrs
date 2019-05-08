import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';
import { DataTable } from "primeng/primeng";
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { ListaRadicadoService } from '../../service';


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
  loadRadicadoQueja2: RadicadoModel

  @Input()
  loadEstados: EstadoRadicadoModel[]

  @Input()
  loading: boolean = true;

  @Output()
  onEditEstado = new EventEmitter<any>();


  /**
   * Events
   */

  loadRadicadoQueja$ = environment

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
   * @param loadRadicadoQueja 
   */
  onRowEditInit(loadRadicadoQueja: RadicadoModel) {
    this.estadoClonado['loadRadicadoQueja'] = {
      ...loadRadicadoQueja
    };
    console.log( this.estadoClonado)


  }

  /**
   * Cancelación del editable, inserta el objeto copia en el indice seleccionado
   * @param loadRadicadoQueja 
   * @param index 
   */

  onRowEditCancel(loadRadicadoQueja: any, index: number) {
    this.loadRadicadoQueja2[index].estado_radicado.estado = this.estadoClonado['loadRadicadoQueja'].estado_radicado.estado;
    this.loadRadicadoQueja2[index].justificacion = this.estadoClonado['loadRadicadoQueja'].justificacion;

    console.log(loadRadicadoQueja)
    delete  this.estadoClonado['loadRadicadoQueja'];
  }

  /**
   * Metodo que edita el estado de la tabla dandole un id
   * @param id 
   */

  onRowEditSave(id: number) {
    this.onEditEstado.emit(id)
  }

}
