import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickWaveComponent } from '@app/test/click-wave/click-wave.component';

describe('ClickWaveComponent', () => {
  let component: ClickWaveComponent;
  let fixture: ComponentFixture<ClickWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
