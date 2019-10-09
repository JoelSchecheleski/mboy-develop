import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldopostoComponent } from './saldoposto.component';

describe('SaldopostoComponent', () => {
  let component: SaldopostoComponent;
  let fixture: ComponentFixture<SaldopostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldopostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldopostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
