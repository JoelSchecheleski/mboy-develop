import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OncoComponent } from './onco.component';

describe('OncoComponent', () => {
  let component: OncoComponent;
  let fixture: ComponentFixture<OncoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OncoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
