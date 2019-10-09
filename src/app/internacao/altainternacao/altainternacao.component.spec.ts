import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltainternacaoComponent } from './altainternacao.component';

describe('AltainternacaoComponent', () => {
  let component: AltainternacaoComponent;
  let fixture: ComponentFixture<AltainternacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltainternacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltainternacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
