import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelnotafiscentradaComponent } from './relnotafiscentrada.component';

describe('RelnotafiscentradaComponent', () => {
  let component: RelnotafiscentradaComponent;
  let fixture: ComponentFixture<RelnotafiscentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelnotafiscentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelnotafiscentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
