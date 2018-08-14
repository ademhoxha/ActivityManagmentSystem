import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAssignationComponent } from './job-assignation.component';

describe('JobAssignationComponent', () => {
  let component: JobAssignationComponent;
  let fixture: ComponentFixture<JobAssignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAssignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAssignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
