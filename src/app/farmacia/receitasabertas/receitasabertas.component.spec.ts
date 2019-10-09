import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasabertasComponent } from './receitasabertas.component';

describe('ReceitasabertasComponent', () => {
  let component: ReceitasabertasComponent;
  let fixture: ComponentFixture<ReceitasabertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasabertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasabertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
