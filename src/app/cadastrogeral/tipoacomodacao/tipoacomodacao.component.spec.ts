import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoacomodacaoComponent } from './tipoacomodacao.component';

describe('TipoacomodacaoComponent', () => {
  let component: TipoacomodacaoComponent;
  let fixture: ComponentFixture<TipoacomodacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoacomodacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoacomodacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
