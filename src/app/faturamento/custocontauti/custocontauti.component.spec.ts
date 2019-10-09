import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustocontautiComponent } from './custocontauti.component';

describe('CustocontautiComponent', () => {
  let component: CustocontautiComponent;
  let fixture: ComponentFixture<CustocontautiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustocontautiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustocontautiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
