import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocredComponent } from './alocred.component';

describe('AlocredComponent', () => {
  let component: AlocredComponent;
  let fixture: ComponentFixture<AlocredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
