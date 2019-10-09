import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovestoqueComponent } from './movestoque.component';

describe('MovestoqueComponent', () => {
  let component: MovestoqueComponent;
  let fixture: ComponentFixture<MovestoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovestoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovestoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
