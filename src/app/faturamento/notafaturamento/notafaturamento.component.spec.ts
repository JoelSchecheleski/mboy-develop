import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotafaturamentoComponent } from './notafaturamento.component';

describe('NotafaturamentoComponent', () => {
  let component: NotafaturamentoComponent;
  let fixture: ComponentFixture<NotafaturamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotafaturamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotafaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
