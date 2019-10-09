import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitmedicamentosComponent } from './kitmedicamentos.component';

describe('KitmedicamentosComponent', () => {
  let component: KitmedicamentosComponent;
  let fixture: ComponentFixture<KitmedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitmedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitmedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
