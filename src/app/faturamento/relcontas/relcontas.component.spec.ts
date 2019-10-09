import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelcontasComponent } from './relcontas.component';

describe('RelcontasComponent', () => {
  let component: RelcontasComponent;
  let fixture: ComponentFixture<RelcontasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelcontasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelcontasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
