import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotemitfaturComponent } from './notemitfatur.component';

describe('NotemitfaturComponent', () => {
  let component: NotemitfaturComponent;
  let fixture: ComponentFixture<NotemitfaturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotemitfaturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotemitfaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
