import { Component } from '@angular/core';

@Component({
  selector: 'app-year-selector',
  template: `
    <mat-card>
      <p>year-selector works!</p>
      <mat-slider
        thumbLabel
        min="1"
        max="100"
        [(value)]="value"
        step="0.0001"
        [displayWith]="computeRoundedExponentialValue"
      ></mat-slider>
      <h1>
        {{ computeRoundedExponentialValue(value) }}
      </h1>
    </mat-card>
  `,
  styles: [
    `
      mat-slider {
        width: 300px;
      }
      mat-card {
        max-width: 350px;
      }
    `,
  ],
})
export class TimeSelectorComponent {
  value: number | null = 5;

  // constructor() {}
  //
  // ngOnInit(): void {}

  // eslint-disable-next-line class-methods-use-this
  computeRoundedExponentialValue(value: number | null) {
    if (value) {
      return Math.floor(-3000 / (value - 101) - 25);
    }
    return 5;
  }
}
