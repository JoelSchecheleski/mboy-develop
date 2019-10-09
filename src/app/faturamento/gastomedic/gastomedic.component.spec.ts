import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastomedicComponent } from './gastomedic.component';

describe('GastomedicComponent', () => {
  let component: GastomedicComponent;
  let fixture: ComponentFixture<GastomedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastomedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastomedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
