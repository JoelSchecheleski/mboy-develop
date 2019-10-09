import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersusComponent } from './intersus.component';

describe('IntersusComponent', () => {
  let component: IntersusComponent;
  let fixture: ComponentFixture<IntersusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
