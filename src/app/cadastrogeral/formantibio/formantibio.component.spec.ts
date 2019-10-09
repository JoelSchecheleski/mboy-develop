import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormantibioComponent } from './formantibio.component';

describe('FormantibioComponent', () => {
  let component: FormantibioComponent;
  let fixture: ComponentFixture<FormantibioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormantibioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormantibioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
