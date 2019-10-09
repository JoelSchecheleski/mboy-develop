import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesourariafinscalComponent } from './tesourariafinscal.component';

describe('TesourariafinscalComponent', () => {
  let component: TesourariafinscalComponent;
  let fixture: ComponentFixture<TesourariafinscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesourariafinscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesourariafinscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
