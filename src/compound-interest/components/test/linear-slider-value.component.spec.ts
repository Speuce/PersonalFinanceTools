import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearSliderValueComponent } from '../linear-slider-value.component';

describe('LinearSliderValueComponent', () => {
  let component: LinearSliderValueComponent;
  let fixture: ComponentFixture<LinearSliderValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinearSliderValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearSliderValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
