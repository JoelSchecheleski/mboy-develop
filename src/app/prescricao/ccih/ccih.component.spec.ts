import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcihComponent } from './ccih.component';

describe('CcihComponent', () => {
  let component: CcihComponent;
  let fixture: ComponentFixture<CcihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
