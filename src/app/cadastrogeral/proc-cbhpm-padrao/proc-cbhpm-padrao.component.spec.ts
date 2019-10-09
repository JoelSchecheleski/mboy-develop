import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcCbhpmPadraoComponent } from './proc-cbhpm-padrao.component';

describe('ProcCbhpmPadraoComponent', () => {
  let component: ProcCbhpmPadraoComponent;
  let fixture: ComponentFixture<ProcCbhpmPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcCbhpmPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcCbhpmPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
