import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioaplicacaoComponent } from './horarioaplicacao.component';

describe('HorarioaplicacaoComponent', () => {
  let component: HorarioaplicacaoComponent;
  let fixture: ComponentFixture<HorarioaplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioaplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioaplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
