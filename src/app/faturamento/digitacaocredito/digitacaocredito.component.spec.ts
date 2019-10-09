import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitacaocreditoComponent } from './digitacaocredito.component';

describe('DigitacaocreditoComponent', () => {
  let component: DigitacaocreditoComponent;
  let fixture: ComponentFixture<DigitacaocreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitacaocreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitacaocreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
