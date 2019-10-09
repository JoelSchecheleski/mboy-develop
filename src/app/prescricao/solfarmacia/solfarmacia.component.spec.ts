import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolfarmaciaComponent } from './solfarmacia.component';

describe('SolfarmaciaComponent', () => {
  let component: SolfarmaciaComponent;
  let fixture: ComponentFixture<SolfarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolfarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolfarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
