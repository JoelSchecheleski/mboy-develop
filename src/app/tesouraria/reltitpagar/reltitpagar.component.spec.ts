import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReltitpagarComponent } from './reltitpagar.component';

describe('ReltitpagarComponent', () => {
  let component: ReltitpagarComponent;
  let fixture: ComponentFixture<ReltitpagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReltitpagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReltitpagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
