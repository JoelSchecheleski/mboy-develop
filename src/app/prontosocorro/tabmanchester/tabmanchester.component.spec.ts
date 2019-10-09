import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmanchesterComponent } from './tabmanchester.component';

describe('TabmanchesterComponent', () => {
  let component: TabmanchesterComponent;
  let fixture: ComponentFixture<TabmanchesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmanchesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmanchesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
