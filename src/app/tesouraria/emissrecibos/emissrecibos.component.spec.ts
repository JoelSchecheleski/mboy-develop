import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissrecibosComponent } from './emissrecibos.component';

describe('EmissrecibosComponent', () => {
  let component: EmissrecibosComponent;
  let fixture: ComponentFixture<EmissrecibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissrecibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissrecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
