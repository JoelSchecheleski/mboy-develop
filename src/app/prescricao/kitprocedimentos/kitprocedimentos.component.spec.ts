import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitprocedimentosComponent } from './kitprocedimentos.component';

describe('KitprocedimentosComponent', () => {
  let component: KitprocedimentosComponent;
  let fixture: ComponentFixture<KitprocedimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitprocedimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitprocedimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
