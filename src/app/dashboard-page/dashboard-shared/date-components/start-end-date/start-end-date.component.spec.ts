import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEndDateComponent } from '@app/dashboard-page/dashboard-shared/date-components/start-end-date/start-end-date.component';

describe('StartEndDateComponent', () => {
  let component: StartEndDateComponent;
  let fixture: ComponentFixture<StartEndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
