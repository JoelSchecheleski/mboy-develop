import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriComponent } from './prescri.component';

describe('PrescriComponent', () => {
  let component: PrescriComponent;
  let fixture: ComponentFixture<PrescriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
