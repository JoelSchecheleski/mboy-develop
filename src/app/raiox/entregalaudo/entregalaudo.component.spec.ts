import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregalaudoComponent } from './entregalaudo.component';

describe('EntregalaudoComponent', () => {
  let component: EntregalaudoComponent;
  let fixture: ComponentFixture<EntregalaudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregalaudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregalaudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
