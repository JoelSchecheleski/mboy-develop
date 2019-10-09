import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedcomprasComponent } from './pedcompras.component';

describe('PedcomprasComponent', () => {
  let component: PedcomprasComponent;
  let fixture: ComponentFixture<PedcomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedcomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
