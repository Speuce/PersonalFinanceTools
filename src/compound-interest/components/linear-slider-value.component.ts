import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-linear-slider-value',
  template: `
    <mat-card>
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
              (ngModelChange)="setValue($event)"
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
        (valueChange)="setValue($event)"
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

      mat-slider {
        width: 300px;
      }
      mat-card {
        max-width: 350px;
      }
      .myForm {
        font-size: 25px;
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
export class LinearSliderValueComponent implements OnInit {
  ngOnInit(): void {
    console.log(`data: ${this.softMax} val: ${!!this.softMax}`);
  }

  maxNum: number = Number.MAX_SAFE_INTEGER;

  @Input() min: number = 1;

  @Input() max: number = 100;

  @Input() softMax: string | undefined;

  @Input() step: number = 1;

  @Input() arrowStep: number = 0;

  @Input() prefix: string = '';

  @Input() suffix: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() value: number | null = 5;

  @Input() textWidth: number = 125;

  @Output() valueChange = new EventEmitter<number | null>();

  setValue(newVal: number | null) {
    this.value = newVal;
    this.valueChange.emit(this.value);
  }
}
