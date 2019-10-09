import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosaComponent } from './glosa.component';

describe('GlosaComponent', () => {
  let component: GlosaComponent;
  let fixture: ComponentFixture<GlosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
