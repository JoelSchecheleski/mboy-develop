import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltapsComponent } from './altaps.component';

describe('AltapsComponent', () => {
  let component: AltapsComponent;
  let fixture: ComponentFixture<AltapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
