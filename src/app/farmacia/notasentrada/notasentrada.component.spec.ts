import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasentradaComponent } from './notasentrada.component';

describe('NotasentradaComponent', () => {
  let component: NotasentradaComponent;
  let fixture: ComponentFixture<NotasentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
