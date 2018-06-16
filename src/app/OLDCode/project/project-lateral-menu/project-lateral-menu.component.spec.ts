import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLateralMenuComponent } from './project-lateral-menu.component';

describe('ProjectLateralMenuComponent', () => {
  let component: ProjectLateralMenuComponent;
  let fixture: ComponentFixture<ProjectLateralMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLateralMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLateralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
