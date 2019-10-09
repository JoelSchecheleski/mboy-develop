import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenferoncoComponent } from './evenferonco.component';

describe('EvenferoncoComponent', () => {
  let component: EvenferoncoComponent;
  let fixture: ComponentFixture<EvenferoncoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenferoncoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenferoncoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
