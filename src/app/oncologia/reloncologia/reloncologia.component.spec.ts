import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloncologiaComponent } from './reloncologia.component';

describe('ReloncologiaComponent', () => {
  let component: ReloncologiaComponent;
  let fixture: ComponentFixture<ReloncologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloncologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloncologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
