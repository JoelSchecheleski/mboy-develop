import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelforneceComponent } from './relfornece.component';

describe('RelforneceComponent', () => {
  let component: RelforneceComponent;
  let fixture: ComponentFixture<RelforneceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelforneceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelforneceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
