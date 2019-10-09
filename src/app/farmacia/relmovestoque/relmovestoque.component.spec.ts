import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelmovestoqueComponent } from './relmovestoque.component';

describe('RelmovestoqueComponent', () => {
  let component: RelmovestoqueComponent;
  let fixture: ComponentFixture<RelmovestoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelmovestoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelmovestoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
