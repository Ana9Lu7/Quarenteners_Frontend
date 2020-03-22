import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacaoMedicaPageComponent } from './orientacao-medica-page.component';

describe('OrientacaoMedicaPageComponent', () => {
  let component: OrientacaoMedicaPageComponent;
  let fixture: ComponentFixture<OrientacaoMedicaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacaoMedicaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacaoMedicaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
