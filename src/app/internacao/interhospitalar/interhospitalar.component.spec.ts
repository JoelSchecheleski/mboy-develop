import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterhospitalarComponent } from './interhospitalar.component';

describe('InterhospitalarComponent', () => {
  let component: InterhospitalarComponent;
  let fixture: ComponentFixture<InterhospitalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterhospitalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterhospitalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
