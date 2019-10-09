import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelmedcontroladoComponent } from './relmedcontrolado.component';

describe('RelmedcontroladoComponent', () => {
  let component: RelmedcontroladoComponent;
  let fixture: ComponentFixture<RelmedcontroladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelmedcontroladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelmedcontroladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
