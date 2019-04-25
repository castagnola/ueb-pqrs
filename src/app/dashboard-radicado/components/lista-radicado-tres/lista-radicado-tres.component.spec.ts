import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRadicadoTresComponent } from './lista-radicado-tres.component';

describe('ListaRadicadoTresComponent', () => {
  let component: ListaRadicadoTresComponent;
  let fixture: ComponentFixture<ListaRadicadoTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRadicadoTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRadicadoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
