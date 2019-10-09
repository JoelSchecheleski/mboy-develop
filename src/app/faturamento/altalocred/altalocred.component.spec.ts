import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltalocredComponent } from './altalocred.component';

describe('AltalocredComponent', () => {
  let component: AltalocredComponent;
  let fixture: ComponentFixture<AltalocredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltalocredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltalocredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
