import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaimagemComponent } from './faturaimagem.component';

describe('FaturaimagemComponent', () => {
  let component: FaturaimagemComponent;
  let fixture: ComponentFixture<FaturaimagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaimagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaimagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
