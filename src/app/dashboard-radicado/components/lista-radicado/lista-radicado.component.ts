import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';
import { DataTable } from "primeng/primeng";
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { ListaRadicadoService } from '../../service';



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

  @ViewChild("dt")
  dt: DataTable;

  @Input()
  loadRadicado: RadicadoModel

  @Input()
  loadRadicado2: RadicadoModel

  @Input()
  loadEstados: EstadoRadicadoModel[]

  @Input()
  loading: boolean = true;

  @Output()
  onEditEstado = new EventEmitter<any>();


  /**
   * Events
   */

  loadRadicado$ = environment

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
   * @param loadRadicado 
   */
  onRowEditInit(loadRadicado: RadicadoModel) {
    this.estadoClonado['loadRadicado'] = {
      ...loadRadicado
    };
    console.log( this.estadoClonado)


  }

  /**
   * Cancelación del editable, inserta el objeto copia en el indice seleccionado
   * @param loadRadicado 
   * @param index 
   */

  onRowEditCancel(loadRadicado: any, index: number) {
    this.loadRadicado2[index].estado_radicado.estado = this.estadoClonado['loadRadicado'].estado_radicado.estado;
    this.loadRadicado2[index].justificacion = this.estadoClonado['loadRadicado'].justificacion;

    console.log(loadRadicado)
    delete  this.estadoClonado['loadRadicado'];
  }

  /**
   * Metodo que edita el estado de la tabla dandole un id
   * @param id 
   */

  onRowEditSave(id: number) {
    this.onEditEstado.emit(id)
  }

}
