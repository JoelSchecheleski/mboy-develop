import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhagastosComponent } from './folhagastos.component';

describe('FolhagastosComponent', () => {
  let component: FolhagastosComponent;
  let fixture: ComponentFixture<FolhagastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolhagastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhagastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
