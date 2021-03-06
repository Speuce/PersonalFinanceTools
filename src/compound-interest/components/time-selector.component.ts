import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-year-selector',
  template: `
    <mat-card style="margin: 5px; height: 150px">
      <div style="display: flex; justify-content: flex-start; margin-left: 1em">
        <div style="display: inline-block">
          <mat-form-field
            class="myForm"
            appearance="outline"
            color="accent"
            floatLabel="never"
            style="margin: auto 0 0 auto"
          >
            <input matInput type="number" [ngModel]="value" (ngModelChange)="setValue($event)" />
          </mat-form-field>
          <h1>Years</h1>
        </div>
      </div>
      <mat-slider
        thumbLabel
        min="1"
        max="100"
        [value]="computeSliderValue(value)"
        (valueChange)="updateValue($event)"
        step="0.0001"
        [displayWith]="computeRoundedExponentialValue"
      ></mat-slider>
    </mat-card>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        display: inline;
        margin-left: 30px;
      }

      mat-slider {
        width: 300px;
      }
      mat-card {
        max-width: 350px;
      }
      .myForm {
        font-size: 25px;
        max-width: 125px;
      }
      /deep/ .myForm .mat-form-field-infix {
        padding: 0 0 0.5em 0;
      }

      /deep/ .myForm .mat-form-field-wrapper {
        padding: 0;
      }
    `,
  ],
})
export class TimeSelectorComponent implements OnInit {
  value: number = 5;

  constructor(private calcService: CalculatorService) {}

  ngOnInit(): void {
    this.value = this.calcService.periods;
  }

  getValue(): number {
    return this.value;
  }

  // eslint-disable-next-line class-methods-use-this
  updateValue(val: number | null) {
    if (val && val >= 1) {
      this.setValue(this.computeRoundedExponentialValue(val));
    } else {
      this.setValue(5);
    }
  }

  setValue(val: number) {
    this.value = val;
    this.calcService.periods = val;
  }

  // eslint-disable-next-line class-methods-use-this
  computeSliderValue(val: number | null) {
    if (val && val > 1) {
      return -3000 / (val + 25.0) + 101;
    }
    return 1;
  }

  // eslint-disable-next-line class-methods-use-this
  computeRoundedExponentialValue(value: number | null) {
    if (value) {
      return Math.round(-3000 / (value - 101) - 25);
    }
    return 5;
  }
}
