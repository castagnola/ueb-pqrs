import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaRadicadoComponent } from '../../components';
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
  selectedCar: RadicadoModel;


  /**
   * Properties
   */

  @ViewChild('listaRadicado')
  listaRadicado: ListaRadicadoComponent

  constructor(private listaService: ListaRadicadoService) { }

  ngOnInit() {

    this.getListaRadicadoById();
  }

  /**
   * Lista de solicitudes radicadas
   */

  getListaRadicadoById() {
    this.listaService.getListaRadicadoById().subscribe(response => {

      this.loadRadicado = response,
      this.loading = false;
        console.log(response);
    });

  }
 

}
