import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumofuncionariosComponent } from './consumofuncionarios.component';

describe('ConsumofuncionariosComponent', () => {
  let component: ConsumofuncionariosComponent;
  let fixture: ComponentFixture<ConsumofuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumofuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumofuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
