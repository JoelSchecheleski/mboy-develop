import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibhonoComponent } from './libhono.component';

describe('LibhonoComponent', () => {
  let component: LibhonoComponent;
  let fixture: ComponentFixture<LibhonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibhonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibhonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
