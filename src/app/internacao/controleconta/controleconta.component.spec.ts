import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlecontaComponent } from './controleconta.component';

describe('ControlecontaComponent', () => {
  let component: ControlecontaComponent;
  let fixture: ComponentFixture<ControlecontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlecontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlecontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
