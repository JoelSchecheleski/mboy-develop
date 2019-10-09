import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolfisioterapiaComponent } from './evolfisioterapia.component';

describe('EvolfisioterapiaComponent', () => {
  let component: EvolfisioterapiaComponent;
  let fixture: ComponentFixture<EvolfisioterapiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolfisioterapiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolfisioterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
