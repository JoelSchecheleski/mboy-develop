import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaolaudoComponent } from './emissaolaudo.component';

describe('EmissaolaudoComponent', () => {
  let component: EmissaolaudoComponent;
  let fixture: ComponentFixture<EmissaolaudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissaolaudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissaolaudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
