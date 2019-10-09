import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntimicrobianoComponent } from './antimicrobiano.component';

describe('AntimicrobianoComponent', () => {
  let component: AntimicrobianoComponent;
  let fixture: ComponentFixture<AntimicrobianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntimicrobianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntimicrobianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
