import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAuthComponent } from './success-auth.component';

describe('SuccessAuthComponent', () => {
  let component: SuccessAuthComponent;
  let fixture: ComponentFixture<SuccessAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
