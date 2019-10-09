import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaemittesourariaComponent } from './notaemittesouraria.component';

describe('NotaemittesourariaComponent', () => {
  let component: NotaemittesourariaComponent;
  let fixture: ComponentFixture<NotaemittesourariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaemittesourariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaemittesourariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
