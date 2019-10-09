import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadexamelaborComponent } from './cadexamelabor.component';

describe('CadexamelaborComponent', () => {
  let component: CadexamelaborComponent;
  let fixture: ComponentFixture<CadexamelaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadexamelaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadexamelaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
