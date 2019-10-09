import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceituarioComponent } from './receituario.component';

describe('ReceituarioComponent', () => {
  let component: ReceituarioComponent;
  let fixture: ComponentFixture<ReceituarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceituarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceituarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
