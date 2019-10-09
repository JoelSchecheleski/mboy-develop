import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasimplesComponent } from './notasimples.component';

describe('NotasimplesComponent', () => {
  let component: NotasimplesComponent;
  let fixture: ComponentFixture<NotasimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
