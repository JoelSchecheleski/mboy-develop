import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtmovestoqueComponent } from './extmovestoque.component';

describe('ExtmovestoqueComponent', () => {
  let component: ExtmovestoqueComponent;
  let fixture: ComponentFixture<ExtmovestoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtmovestoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtmovestoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
