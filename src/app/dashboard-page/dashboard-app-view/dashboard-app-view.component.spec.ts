import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppViewComponent } from './dashboard-app-view.component';

describe('DashboardAppViewComponent', () => {
  let component: DashboardAppViewComponent;
  let fixture: ComponentFixture<DashboardAppViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAppViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
