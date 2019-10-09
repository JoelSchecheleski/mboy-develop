import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescrioncologiaComponent } from './prescrioncologia.component';

describe('PrescrioncologiaComponent', () => {
  let component: PrescrioncologiaComponent;
  let fixture: ComponentFixture<PrescrioncologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescrioncologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescrioncologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
