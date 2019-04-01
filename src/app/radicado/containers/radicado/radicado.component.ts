import { Component, OnInit, ViewChild } from '@angular/core';
import { RadicadoDetalleComponent } from '../../components';
import { RadicadoService } from '../../service/radicado/radicado.service';
import { SnotifyModule, SnotifyService } from 'ng-snotify';


/**Models */
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { tipoPqrsModel } from '../../../shared/models/tipoPQRS.Model';

@Component({
  selector: 'app-radicado',
  templateUrl: './radicado.component.html',
  styleUrls: ['./radicado.component.css']
})
export class RadicadoComponent implements OnInit {
  
  /**
   * Atributos
   */
  tipoPqrs: tipoPqrsModel;

  constructor(private radicadoService: RadicadoService,private notify:SnotifyService) { }

  /**
   * Properties
   */

  @ViewChild("radicadoDetalle")
  radicadoDetalle: RadicadoDetalleComponent;

  ngOnInit() {
    this.getPQRS();

  }

  /**
   * Method to load tipos de pqrs
   */
  
  getPQRS() {
    return this.radicadoService.getTipoPQRS().subscribe(response => {
      this.tipoPqrs = response;
      data => console.log(response);
      error => console.log(error)

    })
  }

  onCreateRadicado(event:RadicadoModel){

    this.radicadoService.CreateRadicado(event).subscribe(
      data=> this.handleResponse(data),
      error=> this.notify.error(error.error.error)
      );
  }
  handleResponse(data) {

  console.log(data)
  }


}
