import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelprodutoComponent } from './relproduto.component';

describe('RelprodutoComponent', () => {
  let component: RelprodutoComponent;
  let fixture: ComponentFixture<RelprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
