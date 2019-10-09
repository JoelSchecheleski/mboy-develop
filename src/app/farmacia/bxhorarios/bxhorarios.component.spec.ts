import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BxhorariosComponent } from './bxhorarios.component';

describe('BxhorariosComponent', () => {
  let component: BxhorariosComponent;
  let fixture: ComponentFixture<BxhorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxhorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxhorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
