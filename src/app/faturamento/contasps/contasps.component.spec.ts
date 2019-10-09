import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaspsComponent } from './contasps.component';

describe('ContaspsComponent', () => {
  let component: ContaspsComponent;
  let fixture: ComponentFixture<ContaspsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaspsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
