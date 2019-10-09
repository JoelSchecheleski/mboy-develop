import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulrequisicaoComponent } from './consulrequisicao.component';

describe('ConsulrequisicaoComponent', () => {
  let component: ConsulrequisicaoComponent;
  let fixture: ComponentFixture<ConsulrequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulrequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulrequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
