import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelfornecedoresComponent } from './relfornecedores.component';

describe('RelfornecedoresComponent', () => {
  let component: RelfornecedoresComponent;
  let fixture: ComponentFixture<RelfornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelfornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelfornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
