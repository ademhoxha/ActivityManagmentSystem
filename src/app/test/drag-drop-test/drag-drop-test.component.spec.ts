import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropTestComponent } from './drag-drop-test.component';

describe('DragDropTestComponent', () => {
  let component: DragDropTestComponent;
  let fixture: ComponentFixture<DragDropTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
