import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolenfermagemComponent } from './evolenfermagem.component';

describe('EvolenfermagemComponent', () => {
  let component: EvolenfermagemComponent;
  let fixture: ComponentFixture<EvolenfermagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolenfermagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolenfermagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
