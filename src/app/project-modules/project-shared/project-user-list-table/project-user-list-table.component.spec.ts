import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUserListTableComponent } from '@app/project-modules/project-shared/project-user-list-table/project-user-list-table.component';

describe('ProjectUserListTableComponent', () => {
  let component: ProjectUserListTableComponent;
  let fixture: ComponentFixture<ProjectUserListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUserListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUserListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
