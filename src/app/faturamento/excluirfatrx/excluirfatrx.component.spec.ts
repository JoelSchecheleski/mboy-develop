import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirfatrxComponent } from './excluirfatrx.component';

describe('ExcluirfatrxComponent', () => {
  let component: ExcluirfatrxComponent;
  let fixture: ComponentFixture<ExcluirfatrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirfatrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirfatrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
