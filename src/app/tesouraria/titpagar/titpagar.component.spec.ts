import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitpagarComponent } from './titpagar.component';

describe('TitpagarComponent', () => {
  let component: TitpagarComponent;
  let fixture: ComponentFixture<TitpagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitpagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitpagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
