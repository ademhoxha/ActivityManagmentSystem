import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralActivityMenuComponent } from '@app/dashboard-page/lateral-activity-menu/lateral-activity-menu.component';

describe('LateralActivityMenuComponent', () => {
  let component: LateralActivityMenuComponent;
  let fixture: ComponentFixture<LateralActivityMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralActivityMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralActivityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
