import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaRadicadoService } from '../../service/lista-radicado/lista-radicado.service';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { EstadoRadicadoService } from '../../../shared/services/estado-radicado/estado-radicado.service'
import { MessageService } from 'primeng/api';
import { forkJoin } from "rxjs";

/**
 * Components
 */
import { ListaRadicadoComponent, ListaRadicadoTresComponent, ListaRadicadoDosComponent, ListaRadicadoCuatroComponent } from '../../components';


@Component({
  selector: 'app-dashboard-radicado',
  templateUrl: './dashboard-radicado.component.html',
  styleUrls: ['./dashboard-radicado.component.css']
})
export class DashboardRadicadoComponent implements OnInit {

  /**
  * Atributos
  */
  loading: boolean = true;

  loadRadicado: RadicadoModel

  loadRadicado2: RadicadoModel

  loadRadicadoReclamo: RadicadoModel

  loadRadicadoReclamo2: RadicadoModel

  loadRadicadoQueja: RadicadoModel

  loadRadicadoQueja2: RadicadoModel

  loadRadicadoSugerencia: RadicadoModel

  loadRadicadoSugerencia2: RadicadoModel

  loadEstados: EstadoRadicadoModel[];


  /**
   * Properties
   */

  @ViewChild('listaRadicado')
  listaRadicado: ListaRadicadoComponent

  @ViewChild('listaRadicadoReclamo')
  listaRadicadoReclamo: ListaRadicadoDosComponent

  @ViewChild('listaRadicadoQueja')
  listaRadicadoQueja: ListaRadicadoTresComponent

  @ViewChild('listaRadicadoSugerencia')
  listaRadicadoSugerencia: ListaRadicadoCuatroComponent

  constructor(private listaService: ListaRadicadoService, private generalEstadoRadicado: EstadoRadicadoService, private messageService: MessageService) { }

  ngOnInit() {

    this.getAllEstados();
    this.loadInitialData();

  }


  /**
   * Carga anidada de toda la info
   */
  loadInitialData() {

    let aux = forkJoin([
      this.getListaRadicadoByPeticion(),
      this.getListaRadicadoByPeticion(),
      this.getListaRadicadoByReclamo(),
      this.getListaRadicadoByReclamo(),
      this.getListaRadicadoByQueja(),
      this.getListaRadicadoByQueja(),
      this.getListaRadicadoSugerencia(),
      this.getListaRadicadoSugerencia(),
    ]);
    aux.subscribe(([
      loadRadicado,
      loadRadicado2,
      loadRadicadoReclamo,
      loadRadicadoReclamo2,
      loadRadicadoQueja,
      loadRadicadoQueja2,
      loadRadicadoSugerencia,
      loadRadicadoSugerencia2

    ]) => {
      setTimeout(() => {
        this.loadRadicado = loadRadicado
        this.loadRadicado2 = loadRadicado2
        this.loadRadicadoReclamo = loadRadicadoReclamo
        this.loadRadicadoReclamo2 = loadRadicadoReclamo2
        this.loadRadicadoQueja = loadRadicadoQueja
        this.loadRadicadoQueja2 = loadRadicadoQueja2
        this.loadRadicadoSugerencia = loadRadicadoSugerencia
        this.loadRadicadoSugerencia2 = loadRadicadoSugerencia2
        this.loading = false
      }, 1200)


    });

  }

  /**
   * Lista de solicitudes radicadas por Peticion
   */

  getListaRadicadoByPeticion() {
    return this.listaService.getListaRadicadoByPeticion();

  }

  /**
  * Lista de solicitudes radicadas por Reclamo
  */

  getListaRadicadoByReclamo() {
    return this.listaService.getListaRadicadoByReclamo()

  }

  /**
   * Lista de solicitudes radicadas por Queja
   */

  getListaRadicadoByQueja() {
    return this.listaService.getListaRadicadoByQueja()
  }

  /**
  * Lista de solicitudes radicadas por Sugerencia
  */
  getListaRadicadoSugerencia() {
    return this.listaService.getListaRadicadoBySugerencia()
  }

  /**
   * Lista de estados
   */

  getAllEstados() {
    return this.generalEstadoRadicado.getAllEstados()
      .subscribe(response => {
        this.loadEstados = response
      })
  }

  /**
   * Editar estado by id
   */

  onEditEstado(event) {
    console.log(event)
    if (event.justificacion != null && event.justificacion != '' && event.estado_radicado.id != 1) {
      this.listaService.onEditEstadoById(event).subscribe(
        data => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Actualizado a ' + event.estado_radicado.estado });
        }
      )
    } else if (event.estado_radicado.id == 1) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Seleccione un estado diferente a Radicado' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ingrese una justificación' });

    }
  }
}
