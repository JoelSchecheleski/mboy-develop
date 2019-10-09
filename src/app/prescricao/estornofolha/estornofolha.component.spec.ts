import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstornofolhaComponent } from './estornofolha.component';

describe('EstornofolhaComponent', () => {
  let component: EstornofolhaComponent;
  let fixture: ComponentFixture<EstornofolhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstornofolhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstornofolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
