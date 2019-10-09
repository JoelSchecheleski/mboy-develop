import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumomaterialrxComponent } from './consumomaterialrx.component';

describe('ConsumomaterialrxComponent', () => {
  let component: ConsumomaterialrxComponent;
  let fixture: ComponentFixture<ConsumomaterialrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumomaterialrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumomaterialrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
