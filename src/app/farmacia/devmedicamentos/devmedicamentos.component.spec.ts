import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevmedicamentosComponent } from './devmedicamentos.component';

describe('DevmedicamentosComponent', () => {
  let component: DevmedicamentosComponent;
  let fixture: ComponentFixture<DevmedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevmedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevmedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
