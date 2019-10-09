import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelpedidocompraComponent } from './relpedidocompra.component';

describe('RelpedidocompraComponent', () => {
  let component: RelpedidocompraComponent;
  let fixture: ComponentFixture<RelpedidocompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelpedidocompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelpedidocompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
