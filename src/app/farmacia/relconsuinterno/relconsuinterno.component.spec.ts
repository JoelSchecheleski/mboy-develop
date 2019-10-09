import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelconsuinternoComponent } from './relconsuinterno.component';

describe('RelconsuinternoComponent', () => {
  let component: RelconsuinternoComponent;
  let fixture: ComponentFixture<RelconsuinternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelconsuinternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelconsuinternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
