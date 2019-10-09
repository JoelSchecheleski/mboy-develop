import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecontaComponent } from './preconta.component';

describe('PrecontaComponent', () => {
  let component: PrecontaComponent;
  let fixture: ComponentFixture<PrecontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
