import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbhpmComponent } from './cbhpm.component';

describe('CbhpmComponent', () => {
  let component: CbhpmComponent;
  let fixture: ComponentFixture<CbhpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbhpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbhpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
