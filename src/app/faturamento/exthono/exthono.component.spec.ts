import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExthonoComponent } from './exthono.component';

describe('ExthonoComponent', () => {
  let component: ExthonoComponent;
  let fixture: ComponentFixture<ExthonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExthonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExthonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
