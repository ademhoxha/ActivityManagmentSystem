import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducedViewTestComponent } from './reduced-view-test.component';

describe('ReducedViewTestComponent', () => {
  let component: ReducedViewTestComponent;
  let fixture: ComponentFixture<ReducedViewTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReducedViewTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducedViewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
