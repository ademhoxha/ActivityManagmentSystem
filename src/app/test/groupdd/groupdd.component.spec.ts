import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupddComponent } from './groupdd.component';

describe('GroupddComponent', () => {
  let component: GroupddComponent;
  let fixture: ComponentFixture<GroupddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
