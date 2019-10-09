import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModnotaComponent } from './modnota.component';

describe('ModnotaComponent', () => {
  let component: ModnotaComponent;
  let fixture: ComponentFixture<ModnotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModnotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModnotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
