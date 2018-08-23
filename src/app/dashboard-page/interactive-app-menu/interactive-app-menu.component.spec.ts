import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveAppMenuComponent } from './interactive-app-menu.component';

describe('InteractiveAppMenuComponent', () => {
  let component: InteractiveAppMenuComponent;
  let fixture: ComponentFixture<InteractiveAppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveAppMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveAppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
