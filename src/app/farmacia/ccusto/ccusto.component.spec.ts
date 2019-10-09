import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcustoComponent } from './ccusto.component';

describe('CcustoComponent', () => {
  let component: CcustoComponent;
  let fixture: ComponentFixture<CcustoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcustoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
