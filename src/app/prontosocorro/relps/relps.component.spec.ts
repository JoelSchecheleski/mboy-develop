import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelpsComponent } from './relps.component';

describe('RelpsComponent', () => {
  let component: RelpsComponent;
  let fixture: ComponentFixture<RelpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
