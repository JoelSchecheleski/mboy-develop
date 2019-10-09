import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtmedcontroladosComponent } from './extmedcontrolados.component';

describe('ExtmedcontroladosComponent', () => {
  let component: ExtmedcontroladosComponent;
  let fixture: ComponentFixture<ExtmedcontroladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtmedcontroladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtmedcontroladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
