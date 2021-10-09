import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-linear-slider-value',
  template: `
    <mat-card style="margin: 5px; height: 150px">
      <mat-card-title *ngIf="title">{{ title }}</mat-card-title>
      <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
      <div
        style="display: flex; justify-content: flex-start; align-items: center; margin-left: 1em"
      >
        <h1 *ngIf="prefix">{{ prefix }}</h1>
        <div style="display: inline-block">
          <mat-form-field
            class="myForm"
            [style.maxWidth.px]="textWidth"
            appearance="outline"
            color="accent"
            floatLabel="never"
            style="margin: auto 0 0 auto"
          >
            <input
              matInput
              type="number"
              [ngModel]="value"
              (ngModelChange)="setValue($event, false)"
              [min]="min"
              [max]="softMax !== undefined ? maxNum : max"
              [step]="arrowStep !== 0 ? arrowStep : step"
            />
          </mat-form-field>
          <h1 *ngIf="suffix">{{ suffix }}</h1>
        </div>
      </div>
      <mat-slider
        thumbLabel
        [min]="min"
        [max]="max"
        [value]="value"
        (input)="setValue($event.value, true)"
        (valueChange)="setValue($event, false)"
        [step]="step"
      ></mat-slider>
    </mat-card>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        display: inline;
        margin: 0 0.5em 0 0.5em;
      }

      mat-card-title {
        font-size: 20px;
      }

      mat-card-subtitle {
        margin-bottom: 8px;
      }

      mat-slider {
        width: 300px;
      }
      mat-card {
        max-width: 350px;
      }
      .myForm {
        font-size: 20px;
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
export class LinearSliderValueComponent {
  maxNum: number = Number.MAX_SAFE_INTEGER;

  @Input() min: number = 1;

  @Input() max: number = 100;

  /**
   * True if the user should be allowed to enter values in the
   * textbox larger than the provided max.
   */
  @Input() softMax: string | undefined;

  /**
   * The step of the slider
   */
  @Input() step: number = 1;

  /**
   * The change in value every time the user clicks the
   * arrow on the side of textbox (defaults to step's value)
   */
  @Input() arrowStep: number = 0;

  @Input() prefix: string = '';

  @Input() suffix: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() value: number | null = 5;

  /**
   * Whether to update the value as the user slides the slider (true)
   * Or after the user stops sliding the slider (false).
   */
  @Input() instantUpdate: boolean = true;

  @Input() textWidth: number = 125;

  @Output() valueChange = new EventEmitter<number | null>();

  /**
   * Sets the value stored by this component
   * @param newVal the new value
   * @param instant whether or not this value is considered a
   * 'instant' update
   */
  setValue(newVal: number | null, instant: boolean) {
    if (instant) {
      if (this.instantUpdate) {
        this.value = newVal;
        this.valueChange.emit(this.value);
      }
    } else {
      this.value = newVal;
      this.valueChange.emit(this.value);
    }
  }
}
