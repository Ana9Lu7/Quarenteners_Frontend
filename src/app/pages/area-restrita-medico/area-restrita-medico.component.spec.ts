import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRestritaMedicoComponent } from './area-restrita-medico.component';

describe('AreaRestritaMedicoComponent', () => {
  let component: AreaRestritaMedicoComponent;
  let fixture: ComponentFixture<AreaRestritaMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaRestritaMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRestritaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
