import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelabcComponent } from './relabc.component';

describe('RelabcComponent', () => {
  let component: RelabcComponent;
  let fixture: ComponentFixture<RelabcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelabcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelabcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
