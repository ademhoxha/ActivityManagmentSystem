import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResumeComponent } from './dashboard-resume.component';

describe('DashboardResumeComponent', () => {
  let component: DashboardResumeComponent;
  let fixture: ComponentFixture<DashboardResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
