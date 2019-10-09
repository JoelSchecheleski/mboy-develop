import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BxpostosComponent } from './bxpostos.component';

describe('BxpostosComponent', () => {
  let component: BxpostosComponent;
  let fixture: ComponentFixture<BxpostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BxpostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BxpostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
