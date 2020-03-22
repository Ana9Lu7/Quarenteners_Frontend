import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleconsultaPageComponent } from './teleconsulta-page.component';

describe('TeleconsultaPageComponent', () => {
  let component: TeleconsultaPageComponent;
  let fixture: ComponentFixture<TeleconsultaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleconsultaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleconsultaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
