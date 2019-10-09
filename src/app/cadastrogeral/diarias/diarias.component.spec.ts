import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariasComponent } from './diarias.component';

describe('DiariasComponent', () => {
  let component: DiariasComponent;
  let fixture: ComponentFixture<DiariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
