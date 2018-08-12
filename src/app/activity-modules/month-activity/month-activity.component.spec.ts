import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthActivityComponent } from './month-activity.component';

describe('MonthActivityComponent', () => {
  let component: MonthActivityComponent;
  let fixture: ComponentFixture<MonthActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
