import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistopacienteComponent } from './histopaciente.component';

describe('HistopacienteComponent', () => {
  let component: HistopacienteComponent;
  let fixture: ComponentFixture<HistopacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistopacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistopacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
