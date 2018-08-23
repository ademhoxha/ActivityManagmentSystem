import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLateralMenuComponent } from './dashboard-lateral-menu.component';

describe('DashboardLateralMenuComponent', () => {
  let component: DashboardLateralMenuComponent;
  let fixture: ComponentFixture<DashboardLateralMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLateralMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLateralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
