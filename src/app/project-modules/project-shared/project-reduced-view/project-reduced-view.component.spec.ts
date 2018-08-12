import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReducedViewComponent } from '@app/project-modules/project-shared/project-reduced-view/project-reduced-view.component';

describe('ProjectReducedViewComponent', () => {
  let component: ProjectReducedViewComponent;
  let fixture: ComponentFixture<ProjectReducedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectReducedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReducedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
