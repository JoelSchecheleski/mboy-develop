import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovicontroladosComponent } from './movicontrolados.component';

describe('MovicontroladosComponent', () => {
  let component: MovicontroladosComponent;
  let fixture: ComponentFixture<MovicontroladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovicontroladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovicontroladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
