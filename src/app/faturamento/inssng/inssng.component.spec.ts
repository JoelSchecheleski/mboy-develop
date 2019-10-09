import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InssngComponent } from './inssng.component';

describe('InssngComponent', () => {
  let component: InssngComponent;
  let fixture: ComponentFixture<InssngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InssngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InssngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
