import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaltasComponent } from './contaltas.component';

describe('ContaltasComponent', () => {
  let component: ContaltasComponent;
  let fixture: ComponentFixture<ContaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
