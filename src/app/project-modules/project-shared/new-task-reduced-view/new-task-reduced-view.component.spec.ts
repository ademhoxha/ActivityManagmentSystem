import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskReducedViewComponent } from '@app/project-modules/project-shared/new-task-reduced-view/new-task-reduced-view.component';

describe('NewTaskReducedViewComponent', () => {
  let component: NewTaskReducedViewComponent;
  let fixture: ComponentFixture<NewTaskReducedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskReducedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskReducedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
