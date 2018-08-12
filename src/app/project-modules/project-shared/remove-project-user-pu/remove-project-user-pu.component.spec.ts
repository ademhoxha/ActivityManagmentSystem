import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProjectUserPuComponent } from '@app/project-modules/project-shared/remove-project-user-pu/remove-project-user-pu.component';

describe('RemoveProjectUserPuComponent', () => {
  let component: RemoveProjectUserPuComponent;
  let fixture: ComponentFixture<RemoveProjectUserPuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProjectUserPuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProjectUserPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
