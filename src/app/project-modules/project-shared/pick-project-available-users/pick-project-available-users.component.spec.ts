import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickProjectAvailableUsersComponent } from '@app/project-modules/project-shared/pick-project-available-users/pick-project-available-users.component';

describe('PickProjectAvailableUsersComponent', () => {
  let component: PickProjectAvailableUsersComponent;
  let fixture: ComponentFixture<PickProjectAvailableUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickProjectAvailableUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickProjectAvailableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
