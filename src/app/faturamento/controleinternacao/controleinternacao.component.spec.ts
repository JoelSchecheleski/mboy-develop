import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleinternacaoComponent } from './controleinternacao.component';

describe('ControleinternacaoComponent', () => {
  let component: ControleinternacaoComponent;
  let fixture: ComponentFixture<ControleinternacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleinternacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleinternacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
