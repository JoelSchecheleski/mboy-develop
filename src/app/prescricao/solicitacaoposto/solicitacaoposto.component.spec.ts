import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaopostoComponent } from './solicitacaoposto.component';

describe('SolicitacaopostoComponent', () => {
  let component: SolicitacaopostoComponent;
  let fixture: ComponentFixture<SolicitacaopostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaopostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaopostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
