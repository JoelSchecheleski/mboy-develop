import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaeopcaoComponent } from './saeopcao.component';

describe('SaeopcaoComponent', () => {
  let component: SaeopcaoComponent;
  let fixture: ComponentFixture<SaeopcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaeopcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaeopcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
