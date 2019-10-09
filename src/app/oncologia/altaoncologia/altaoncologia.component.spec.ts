import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaoncologiaComponent } from './altaoncologia.component';

describe('AltaoncologiaComponent', () => {
  let component: AltaoncologiaComponent;
  let fixture: ComponentFixture<AltaoncologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaoncologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaoncologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
