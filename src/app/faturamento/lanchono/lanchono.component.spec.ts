import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchonoComponent } from './lanchono.component';

describe('LanchonoComponent', () => {
  let component: LanchonoComponent;
  let fixture: ComponentFixture<LanchonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
