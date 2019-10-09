import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentocontaComponent } from './fechamentoconta.component';

describe('FechamentocontaComponent', () => {
  let component: FechamentocontaComponent;
  let fixture: ComponentFixture<FechamentocontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechamentocontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechamentocontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
