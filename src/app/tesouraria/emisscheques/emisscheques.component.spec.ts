import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisschequesComponent } from './emisscheques.component';

describe('EmisschequesComponent', () => {
  let component: EmisschequesComponent;
  let fixture: ComponentFixture<EmisschequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisschequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisschequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
