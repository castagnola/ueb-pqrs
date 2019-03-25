import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RadicadoModel } from '../../../shared/models/radicado.Model';
import { tipoPqrsModel } from '../../../shared/models/tipoPQRS.Model';

@Component({
  selector: 'app-radicado-detalle',
  templateUrl: './radicado-detalle.component.html',
  styleUrls: ['./radicado-detalle.component.css']
})
export class RadicadoDetalleComponent implements OnInit {

  /** 
   * Atributos
    */

  form: FormGroup

  /**
   * Events
   */

  @Output()
  onCreateRadicado = new EventEmitter<RadicadoModel>();

  /**
   * Properties
   */

  @Input()
  tipoPqrs: tipoPqrsModel

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Method to create the form
   */

  createForm() {
    this.form = this.fb.group({
      fecha: [new Date()],
      identificacion: ['', Validators.required],
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      correo: ['', Validators.email],
      telefono: ['', Validators.required],
      tipo_pqrs: ['', Validators.required],
      comentarios: ['']
    })
  }

  /**
   * Method to send info
   */

  onSubmit() {
    if (this.form.valid) {
      const radicado: RadicadoModel = {
        fecha_radicado: this.form.value.fecha,
        identificacion: this.form.value.identificacion,
        nombre: this.form.value.nombre,
        correo: this.form.value.correo,
        telefono: this.form.value.telefono,
        id_tipo_pqrs: this.form.value.tipo_pqrs.id,
        comentarios: this.form.value.comentarios
      }
      console.log(radicado);
      this.onCreateRadicado.emit(radicado);

    }

  }

}
