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
      <mat-form-field class="example-form-field" appearance="fill">
        <mat-label>Clearable input</mat-label>
        <input
          matInput
          type="text"
          [ngModel]="computeRoundedExponentialValue(value)"
          (change)="updateValue(getValue($event))"
        />
      </mat-form-field>
      <!--      <mat-label>Clearable input</mat-label>-->
      <!--      <input matInput [(ngModel)]="value" type="number" />-->
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
  getValue(event: Event): number | null {
    return Number((event.target as HTMLInputElement).value);
  }

  // eslint-disable-next-line class-methods-use-this
  updateValue(val: number | null) {
    if (val && val >= 5) {
      this.value = -3000.0 / (val + 25) + 101;
    } else {
      this.value = 5;
    }
  }

  computeRoundedExponentialValue(value: number | null) {
    if (value) {
      return Math.floor(-3000 / (value - 101) - 25);
    }
    return 5;
  }
}
