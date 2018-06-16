import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectTaskComponent } from './new-project-task.component';

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
