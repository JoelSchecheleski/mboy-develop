import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabirComponent } from './tabir.component';

describe('TabirComponent', () => {
  let component: TabirComponent;
  let fixture: ComponentFixture<TabirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
