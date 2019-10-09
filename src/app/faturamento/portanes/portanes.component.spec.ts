import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortanesComponent } from './portanes.component';

describe('PortanesComponent', () => {
  let component: PortanesComponent;
  let fixture: ComponentFixture<PortanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
