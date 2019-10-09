import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaleitoComponent } from './trocaleito.component';

describe('TrocaleitoComponent', () => {
  let component: TrocaleitoComponent;
  let fixture: ComponentFixture<TrocaleitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaleitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaleitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
