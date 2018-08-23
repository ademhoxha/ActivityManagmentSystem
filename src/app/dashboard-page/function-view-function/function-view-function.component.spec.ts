import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionViewFunctionComponent } from './function-view-function.component';

describe('FunctionViewFunctionComponent', () => {
  let component: FunctionViewFunctionComponent;
  let fixture: ComponentFixture<FunctionViewFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionViewFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionViewFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
