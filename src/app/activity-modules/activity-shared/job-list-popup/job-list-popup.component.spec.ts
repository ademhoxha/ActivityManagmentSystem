import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListPopupComponent } from './job-list-popup.component';

describe('JobListPopupComponent', () => {
  let component: JobListPopupComponent;
  let fixture: ComponentFixture<JobListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
