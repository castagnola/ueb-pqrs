import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRadicadoDosComponent } from './lista-radicado-dos.component';

describe('ListaRadicadoDosComponent', () => {
  let component: ListaRadicadoDosComponent;
  let fixture: ComponentFixture<ListaRadicadoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRadicadoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRadicadoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
