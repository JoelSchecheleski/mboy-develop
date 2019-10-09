import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaleitosComponent } from './mapaleitos.component';

describe('MapaleitosComponent', () => {
  let component: MapaleitosComponent;
  let fixture: ComponentFixture<MapaleitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaleitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaleitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
