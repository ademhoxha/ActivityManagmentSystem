import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectTeamComponent } from './edit-project-team.component';

describe('EditProjectTeamComponent', () => {
  let component: EditProjectTeamComponent;
  let fixture: ComponentFixture<EditProjectTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
