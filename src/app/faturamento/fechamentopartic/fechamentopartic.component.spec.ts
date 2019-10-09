import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoparticComponent } from './fechamentopartic.component';

describe('FechamentoparticComponent', () => {
  let component: FechamentoparticComponent;
  let fixture: ComponentFixture<FechamentoparticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechamentoparticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechamentoparticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
