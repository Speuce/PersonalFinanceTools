import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-slider-value',
  template: `
    <mat-card>
      <mat-card-title *ngIf="title">{{ title }}</mat-card-title>
      <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
      <div style="display: flex; justify-content: flex-start; margin-left: 1em">
        <h1 *ngIf="prefix">{{ prefix }}</h1>
        <div style="display: inline-block">
          <mat-form-field
            class="myForm"
            appearance="outline"
            color="accent"
            floatLabel="never"
            style="margin: auto 0 0 auto"
          >
            <input matInput type="number" [(ngModel)]="value" [min]="min" [max]="max" />
          </mat-form-field>
          <h1 *ngIf="suffix">{{ suffix }}</h1>
        </div>
      </div>
      <mat-slider thumbLabel [min]="min" [max]="max" [(value)]="value" [step]="step"></mat-slider>
    </mat-card>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        display: inline;
        margin-left: 0.5em;
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
export class LinearSliderValueComponent implements OnInit {
  @Input() min: number = 1;

  @Input() max: number = 100;

  @Input() step: number = 1;

  @Input() prefix: string = '';

  @Input() suffix: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  value: number | null = 5;

  ngOnInit(): void {
    this.value = 5;
  }
}
