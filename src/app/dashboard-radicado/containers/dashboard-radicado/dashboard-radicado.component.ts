import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaRadicadoComponent, ListaRadicadoTresComponent, ListaRadicadoDosComponent } from '../../components';
import { ListaRadicadoService } from '../../service/lista-radicado/lista-radicado.service';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { EstadoRadicadoService } from '../../../shared/services/estado-radicado/estado-radicado.service'
import { MessageService } from 'primeng/api';
import { error } from '@angular/compiler/src/util';



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

  loadRadicadoQueja: RadicadoModel

  loadRadicadoReclamo2: RadicadoModel

  loadRadicadoQueja2: RadicadoModel

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

  constructor(private listaService: ListaRadicadoService, private generalEstadoRadicado: EstadoRadicadoService, private messageService: MessageService) { }

  ngOnInit() {

    this.getListaRadicadoByPeticion();
    this.getListaRadicadoByReclamo();
    this.getListaRadicadoByQueja();
    this.getAllEstados();
  }

  /**
   * Lista de solicitudes radicadas por Peticion
   */

  getListaRadicadoByPeticion() {
    this.listaService.getListaRadicadoByPeticion().subscribe(response => {
      setTimeout(() => {
        this.loadRadicado = response,
          this.loadRadicado2 = response,
          this.loading = false;
        console.log(response);
      }, 1000);

    });


  }

  /**
  * Lista de solicitudes radicadas por Reclamo
  */

  getListaRadicadoByReclamo() {
    this.listaService.getListaRadicadoByReclamo().subscribe(response => {
      setTimeout(() => {
        this.loadRadicadoReclamo = response,
        this.loadRadicadoReclamo2 = response,
          this.loading = false;
        console.log(response);

      }, 1500)

    });

  }

  /**
   * Lista de solicitudes radicadas por Queja
   */

  getListaRadicadoByQueja() {
    this.listaService.getListaRadicadoByQueja().subscribe(response => {
      setTimeout(() => {
        this.loadRadicadoQueja = response,
        this.loadRadicadoQueja2 = response,
          this.loading = false;
        console.log(response);

      }, 1700)
    });

  }
  /**
   * Lista de estados
   */
  getAllEstados() {
    this.generalEstadoRadicado.getAllEstados().subscribe(response => {
      this.loadEstados = response
      console.log(response, 'estados')
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
