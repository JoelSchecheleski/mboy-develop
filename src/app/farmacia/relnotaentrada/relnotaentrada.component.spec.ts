import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelnotaentradaComponent } from './relnotaentrada.component';

describe('RelnotaentradaComponent', () => {
  let component: RelnotaentradaComponent;
  let fixture: ComponentFixture<RelnotaentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelnotaentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelnotaentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
