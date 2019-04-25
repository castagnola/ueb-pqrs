import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaRadicadoComponent, ListaRadicadoTresComponent,ListaRadicadoDosComponent } from '../../components';
import { ListaRadicadoService } from '../../service/lista-radicado/lista-radicado.service';
import { RadicadoModel } from '../../../shared/models/radicado.Model';


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


  /**
   * Properties
   */

  @ViewChild('listaRadicado')
  listaRadicado: ListaRadicadoComponent

  @ViewChild('listaRadicadoReclamo')
  listaRadicadoReclamo: ListaRadicadoDosComponent

  @ViewChild('listaRadicadoQueja')
  listaRadicadoQueja: ListaRadicadoTresComponent

  constructor(private listaService: ListaRadicadoService) { }

  ngOnInit() {

    this.getListaRadicadoByPeticion();
    this.getListaRadicadoByReclamo();
    this.getListaRadicadoByQueja();
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


}
