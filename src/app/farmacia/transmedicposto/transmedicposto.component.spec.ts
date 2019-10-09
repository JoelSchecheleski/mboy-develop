import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmedicpostoComponent } from './transmedicposto.component';

describe('TransmedicpostoComponent', () => {
  let component: TransmedicpostoComponent;
  let fixture: ComponentFixture<TransmedicpostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmedicpostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmedicpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
