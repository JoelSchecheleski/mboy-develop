import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxaenfermagemComponent } from './taxaenfermagem.component';

describe('TaxaenfermagemComponent', () => {
  let component: TaxaenfermagemComponent;
  let fixture: ComponentFixture<TaxaenfermagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxaenfermagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxaenfermagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
