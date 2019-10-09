import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaraioxComponent } from './faturaraiox.component';

describe('FaturaraioxComponent', () => {
  let component: FaturaraioxComponent;
  let fixture: ComponentFixture<FaturaraioxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaraioxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaraioxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
