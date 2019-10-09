import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiqprodutosComponent } from './etiqprodutos.component';

describe('EtiqprodutosComponent', () => {
  let component: EtiqprodutosComponent;
  let fixture: ComponentFixture<EtiqprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiqprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiqprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
