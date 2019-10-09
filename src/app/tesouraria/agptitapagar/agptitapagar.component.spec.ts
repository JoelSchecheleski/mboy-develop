import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgptitapagarComponent } from './agptitapagar.component';

describe('AgptitapagarComponent', () => {
  let component: AgptitapagarComponent;
  let fixture: ComponentFixture<AgptitapagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgptitapagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgptitapagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
