import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaRadicadoComponent, ListaRadicadoTresComponent,ListaRadicadoDosComponent } from '../../components';
import { ListaRadicadoService } from '../../service/lista-radicado/lista-radicado.service';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { EstadoRadicadoModel } from '../../../shared/models/estadoRadicado.Model';
import { EstadoRadicadoService } from '../../../shared/services/estado-radicado/estado-radicado.service'


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
  loadRadicadoReclamo: RadicadoModel
  loadRadicadoQueja: RadicadoModel
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

  constructor(private listaService: ListaRadicadoService, private generalEstadoRadicado: EstadoRadicadoService) { }

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
          this.loading = false;
        console.log(response);

      }, 1700)
    });

  }
/**
 * Lista de estados
 */
getAllEstados(){
  this.generalEstadoRadicado.getAllEstados().subscribe(response=>{
    this.loadEstados = response
    console.log(response,'estados')
  })
}

}
