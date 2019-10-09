import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReletiqfracComponent } from './reletiqfrac.component';

describe('ReletiqfracComponent', () => {
  let component: ReletiqfracComponent;
  let fixture: ComponentFixture<ReletiqfracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReletiqfracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReletiqfracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
