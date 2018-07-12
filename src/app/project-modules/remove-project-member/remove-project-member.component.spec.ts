import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProjectMemberComponent } from './remove-project-member.component';

describe('RemoveProjectMemberComponent', () => {
  let component: RemoveProjectMemberComponent;
  let fixture: ComponentFixture<RemoveProjectMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProjectMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProjectMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
