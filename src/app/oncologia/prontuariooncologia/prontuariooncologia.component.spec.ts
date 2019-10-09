import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuariooncologiaComponent } from './prontuariooncologia.component';

describe('ProntuariooncologiaComponent', () => {
  let component: ProntuariooncologiaComponent;
  let fixture: ComponentFixture<ProntuariooncologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProntuariooncologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntuariooncologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
