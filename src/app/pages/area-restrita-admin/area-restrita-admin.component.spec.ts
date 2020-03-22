import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRestritaAdminComponent } from './area-restrita-admin.component';

describe('AreaRestritaAdminComponent', () => {
  let component: AreaRestritaAdminComponent;
  let fixture: ComponentFixture<AreaRestritaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaRestritaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRestritaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
