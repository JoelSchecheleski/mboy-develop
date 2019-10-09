import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotemitsimplesComponent } from './notemitsimples.component';

describe('NotemitsimplesComponent', () => {
  let component: NotemitsimplesComponent;
  let fixture: ComponentFixture<NotemitsimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotemitsimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotemitsimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
