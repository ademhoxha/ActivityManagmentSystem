import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownGroupListComponent } from './dropdown-group-list.component';

describe('DropdownGroupListComponent', () => {
  let component: DropdownGroupListComponent;
  let fixture: ComponentFixture<DropdownGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
