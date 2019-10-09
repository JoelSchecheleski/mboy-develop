import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelprodambuComponent } from './relprodambu.component';

describe('RelprodambuComponent', () => {
  let component: RelprodambuComponent;
  let fixture: ComponentFixture<RelprodambuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelprodambuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelprodambuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
