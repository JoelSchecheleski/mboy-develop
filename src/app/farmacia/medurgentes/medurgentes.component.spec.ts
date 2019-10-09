import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedurgentesComponent } from './medurgentes.component';

describe('MedurgentesComponent', () => {
  let component: MedurgentesComponent;
  let fixture: ComponentFixture<MedurgentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedurgentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedurgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
