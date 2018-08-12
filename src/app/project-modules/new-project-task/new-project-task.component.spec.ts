import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectTaskComponent } from '@app/project-modules/new-project-task/new-project-task.component';

describe('NewProjectTaskComponent', () => {
  let component: NewProjectTaskComponent;
  let fixture: ComponentFixture<NewProjectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
