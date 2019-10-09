import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelhonorariosComponent } from './relhonorarios.component';

describe('RelhonorariosComponent', () => {
  let component: RelhonorariosComponent;
  let fixture: ComponentFixture<RelhonorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelhonorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelhonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
