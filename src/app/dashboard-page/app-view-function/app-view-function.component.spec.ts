import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppViewFunctionComponent } from './app-view-function.component';

describe('AppViewFunctionComponent', () => {
  let component: AppViewFunctionComponent;
  let fixture: ComponentFixture<AppViewFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppViewFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppViewFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
