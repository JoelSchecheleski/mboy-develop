import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposubgrupofamiliaComponent } from './gruposubgrupofamilia.component';

describe('GruposubgrupofamiliaComponent', () => {
  let component: GruposubgrupofamiliaComponent;
  let fixture: ComponentFixture<GruposubgrupofamiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposubgrupofamiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposubgrupofamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
