import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecaconsumoComponent } from './checaconsumo.component';

describe('ChecaconsumoComponent', () => {
  let component: ChecaconsumoComponent;
  let fixture: ComponentFixture<ChecaconsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecaconsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecaconsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
