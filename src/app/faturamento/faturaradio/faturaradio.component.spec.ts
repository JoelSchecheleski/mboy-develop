import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaradioComponent } from './faturaradio.component';

describe('FaturaradioComponent', () => {
  let component: FaturaradioComponent;
  let fixture: ComponentFixture<FaturaradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
