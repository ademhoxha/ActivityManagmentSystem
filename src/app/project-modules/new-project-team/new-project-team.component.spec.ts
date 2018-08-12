import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectTeamComponent } from '@app/project-modules/new-project-team/new-project-team.component';

describe('NewProjectTeamComponent', () => {
  let component: NewProjectTeamComponent;
  let fixture: ComponentFixture<NewProjectTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
