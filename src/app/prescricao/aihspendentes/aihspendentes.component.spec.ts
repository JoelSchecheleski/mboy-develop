import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AihspendentesComponent } from './aihspendentes.component';

describe('AihspendentesComponent', () => {
  let component: AihspendentesComponent;
  let fixture: ComponentFixture<AihspendentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AihspendentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AihspendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
