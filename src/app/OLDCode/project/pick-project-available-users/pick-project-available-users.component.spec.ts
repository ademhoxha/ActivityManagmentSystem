import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickProjectAvailableUsersComponent } from './pick-project-available-users.component';

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
