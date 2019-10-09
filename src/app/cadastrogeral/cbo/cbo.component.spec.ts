import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CboComponent } from './cbo.component';

describe('CboComponent', () => {
  let component: CboComponent;
  let fixture: ComponentFixture<CboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
