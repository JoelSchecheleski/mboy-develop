import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelolaudorxComponent } from './modelolaudorx.component';

describe('ModelolaudorxComponent', () => {
  let component: ModelolaudorxComponent;
  let fixture: ComponentFixture<ModelolaudorxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelolaudorxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelolaudorxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
