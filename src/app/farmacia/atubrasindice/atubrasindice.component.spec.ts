import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtubrasindiceComponent } from './atubrasindice.component';

describe('AtubrasindiceComponent', () => {
  let component: AtubrasindiceComponent;
  let fixture: ComponentFixture<AtubrasindiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtubrasindiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtubrasindiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
