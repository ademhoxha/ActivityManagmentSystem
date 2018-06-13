import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDayActivityComponent } from './new-day-activity.component';

describe('NewDayActivityComponent', () => {
  let component: NewDayActivityComponent;
  let fixture: ComponentFixture<NewDayActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDayActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDayActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
