import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStyleComponent } from '@app/test/table-style/table-style.component';

describe('TableStyleComponent', () => {
  let component: TableStyleComponent;
  let fixture: ComponentFixture<TableStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
