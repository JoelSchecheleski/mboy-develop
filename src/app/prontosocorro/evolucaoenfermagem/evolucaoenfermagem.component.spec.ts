import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoenfermagemComponent } from './evolucaoenfermagem.component';

describe('EvolucaoenfermagemComponent', () => {
  let component: EvolucaoenfermagemComponent;
  let fixture: ComponentFixture<EvolucaoenfermagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucaoenfermagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucaoenfermagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
