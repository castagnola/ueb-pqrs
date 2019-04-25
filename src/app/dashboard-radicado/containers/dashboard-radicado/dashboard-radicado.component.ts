import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaRadicadoComponent } from '../../components';
import { ListaRadicadoService } from '../../service/lista-radicado/lista-radicado.service';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { ListaRadicadoDosComponent } from '../../components';


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
  selectedCar: RadicadoModel;


  /**
   * Properties
   */

  @ViewChild('listaRadicado')
  listaRadicado: ListaRadicadoComponent

  @ViewChild('listaRadicadoReclamo')
  listaRadicadoReclamo: ListaRadicadoDosComponent

  constructor(private listaService: ListaRadicadoService) { }

  ngOnInit() {

    this.getListaRadicadoByPeticion();
    this.getListaRadicadoByReclamo();
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
  getListaRadicadoByReclamo(){
    this.listaService.getListaRadicadoByReclamo().subscribe(response=>{
      setTimeout(()=>{
        this.loadRadicadoReclamo = response,
        this.loading = false;
        console.log(response);

      },1500)

    });

  }


}
