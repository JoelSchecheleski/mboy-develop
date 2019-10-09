import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfleitoComponent } from './transfleito.component';

describe('TransfleitoComponent', () => {
  let component: TransfleitoComponent;
  let fixture: ComponentFixture<TransfleitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfleitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfleitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
