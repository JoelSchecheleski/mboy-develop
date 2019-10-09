import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiologicosComponent } from './etiologicos.component';

describe('EtiologicosComponent', () => {
  let component: EtiologicosComponent;
  let fixture: ComponentFixture<EtiologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
