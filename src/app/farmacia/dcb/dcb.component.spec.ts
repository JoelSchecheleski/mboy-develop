import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbComponent } from './dcb.component';

describe('DcbComponent', () => {
  let component: DcbComponent;
  let fixture: ComponentFixture<DcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
