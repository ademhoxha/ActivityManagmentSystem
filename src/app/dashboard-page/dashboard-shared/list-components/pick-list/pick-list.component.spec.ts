import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListComponent } from '@app/dashboard-page/dashboard-shared/list-components/pick-list/pick-list.component';

describe('PickListComponent', () => {
  let component: PickListComponent;
  let fixture: ComponentFixture<PickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
