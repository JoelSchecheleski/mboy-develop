import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaconvenioComponent } from './faturaconvenio.component';

describe('FaturaconvenioComponent', () => {
  let component: FaturaconvenioComponent;
  let fixture: ComponentFixture<FaturaconvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturaconvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturaconvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
