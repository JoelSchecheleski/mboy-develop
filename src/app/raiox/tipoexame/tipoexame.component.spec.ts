import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoexameComponent } from './tipoexame.component';

describe('TipoexameComponent', () => {
  let component: TipoexameComponent;
  let fixture: ComponentFixture<TipoexameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoexameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoexameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
