import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaudosMedicoPageComponent } from './laudos-medico-page.component';

describe('LaudosMedicoPageComponent', () => {
  let component: LaudosMedicoPageComponent;
  let fixture: ComponentFixture<LaudosMedicoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaudosMedicoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaudosMedicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
