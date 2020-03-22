import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseExamesPageComponent } from './analise-exames-page.component';

describe('AnaliseExamesPageComponent', () => {
  let component: AnaliseExamesPageComponent;
  let fixture: ComponentFixture<AnaliseExamesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseExamesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseExamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
