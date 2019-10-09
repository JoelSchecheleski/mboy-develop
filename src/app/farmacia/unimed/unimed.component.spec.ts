import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnimedComponent } from './unimed.component';

describe('UnimedComponent', () => {
  let component: UnimedComponent;
  let fixture: ComponentFixture<UnimedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnimedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
