import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskAssignationComponent } from './new-task-assignation.component';

describe('NewTaskAssignationComponent', () => {
  let component: NewTaskAssignationComponent;
  let fixture: ComponentFixture<NewTaskAssignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskAssignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskAssignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
