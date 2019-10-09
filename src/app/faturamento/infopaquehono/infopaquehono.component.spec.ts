import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopaquehonoComponent } from './infopaquehono.component';

describe('InfopaquehonoComponent', () => {
  let component: InfopaquehonoComponent;
  let fixture: ComponentFixture<InfopaquehonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopaquehonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopaquehonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
