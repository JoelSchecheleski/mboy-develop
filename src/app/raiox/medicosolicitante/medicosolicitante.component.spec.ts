import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosolicitanteComponent } from './medicosolicitante.component';

describe('MedicosolicitanteComponent', () => {
  let component: MedicosolicitanteComponent;
  let fixture: ComponentFixture<MedicosolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
