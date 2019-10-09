import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadfunComponent } from './cadfun.component';

describe('CadfunComponent', () => {
  let component: CadfunComponent;
  let fixture: ComponentFixture<CadfunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadfunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
