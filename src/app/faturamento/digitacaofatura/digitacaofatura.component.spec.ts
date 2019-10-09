import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitacaofaturaComponent } from './digitacaofatura.component';

describe('DigitacaofaturaComponent', () => {
  let component: DigitacaofaturaComponent;
  let fixture: ComponentFixture<DigitacaofaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitacaofaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitacaofaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
