import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySchedulerComponent } from '@app/activity-modules/activity-shared/day-scheduler/day-scheduler.component';

describe('DaySchedulerComponent', () => {
  let component: DaySchedulerComponent;
  let fixture: ComponentFixture<DaySchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
