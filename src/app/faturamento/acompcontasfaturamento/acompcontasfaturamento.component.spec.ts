import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompcontasfaturamentoComponent } from './acompcontasfaturamento.component';

describe('AcompcontasfaturamentoComponent', () => {
  let component: AcompcontasfaturamentoComponent;
  let fixture: ComponentFixture<AcompcontasfaturamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompcontasfaturamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompcontasfaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
