import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { environment } from '../../../../environments/environment';
import { DataTable } from "primeng/primeng";
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { ListaRadicadoService } from '../../service';



@Component({
  selector: 'app-lista-radicado-cuatro',
  templateUrl: './lista-radicado-cuatro.component.html',
  styleUrls: ['./lista-radicado-cuatro.component.css']
})
export class ListaRadicadoCuatroComponent implements OnInit {

  @ViewChild("dt")
  dt: DataTable;

   /**
   * Properties
   */

  @Input()
  loadRadicadoSugerencia: RadicadoModel

  @Input()
  loadRadicadoSugerencia2: RadicadoModel

  @Input()
  loadEstados: EstadoRadicadoModel[]

  @Input()
  loading: boolean = true;

  @Output()
  onEditEstado = new EventEmitter<any>();


  /**
   * Events
   */

  loadRadicadoSugerencia$ = environment

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
   * @param loadRadicadoSugerencia 
   */
  onRowEditInit(loadRadicadoSugerencia: RadicadoModel) {
    this.estadoClonado['loadRadicadoSugerencia'] = {
      ...loadRadicadoSugerencia
    };
    console.log( this.estadoClonado)


  }

  /**
   * Cancelación del editable, inserta el objeto copia en el indice seleccionado
   * @param loadRadicadoSugerencia 
   * @param index 
   */

  onRowEditCancel(loadRadicadoSugerencia: any, index: number) {
    this.loadRadicadoSugerencia2[index].estado_radicado.estado = this.estadoClonado['loadRadicadoSugerencia'].estado_radicado.estado;
    this.loadRadicadoSugerencia2[index].justificacion = this.estadoClonado['loadRadicadoSugerencia'].justificacion;

    console.log(loadRadicadoSugerencia)
    delete  this.estadoClonado['loadRadicadoSugerencia'];
  }

  /**
   * Metodo que edita el estado de la tabla dandole un id
   * @param id 
   */

  onRowEditSave(id: number) {
    this.onEditEstado.emit(id)
  }

}
