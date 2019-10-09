import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaterceirosComponent } from './faturaterceiros.component';

describe('FaturaterceirosComponent', () => {
  let component: FaturaterceirosComponent;
  let fixture: ComponentFixture<FaturaterceirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaterceirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaterceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
