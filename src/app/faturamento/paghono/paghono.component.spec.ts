import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaghonoComponent } from './paghono.component';

describe('PaghonoComponent', () => {
  let component: PaghonoComponent;
  let fixture: ComponentFixture<PaghonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaghonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaghonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
