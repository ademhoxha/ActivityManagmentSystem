import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDaySchedulerComponent } from './all-day-scheduler.component';

describe('AllDaySchedulerComponent', () => {
  let component: AllDaySchedulerComponent;
  let fixture: ComponentFixture<AllDaySchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDaySchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDaySchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
