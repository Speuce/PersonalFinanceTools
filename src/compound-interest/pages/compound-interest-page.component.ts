import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-compound-interest-page',
  template: `
    <h2>{{ principle }}</h2>
    <app-compound-interest-graph></app-compound-interest-graph>
    <div style="display: flex; flex-wrap: wrap; align-items: stretch">
      <app-year-selector></app-year-selector>
      <app-linear-slider-value
        [min]="0.0"
        [max]="100.0"
        [step]="0.05"
        [arrowStep]="1"
        [value]="rate"
        (valueChange)="rateChange($event)"
        suffix="%"
        title="Interest Rate"
        subtitle="Annual"
      ></app-linear-slider-value>
      <app-linear-slider-value
        [min]="0.0"
        [max]="1000000"
        [step]="10000"
        [textWidth]="150"
        [value]="principle"
        (valueChange)="principleChange($event)"
        softMax
        prefix="$"
        title="Principle"
      ></app-linear-slider-value>

      <app-linear-slider-value
        [min]="0.0"
        [max]="100000"
        [step]="1000"
        [textWidth]="150"
        softMax
        prefix="$"
        title="Annual Addition"
      ></app-linear-slider-value>
    </div>
  `,

  styles: [],
})
export class CompoundInterestPageComponent implements OnInit {
  principle: number | null = 0;

  rate: number | null = 0;

  years: number | null = 0;

  constructor(protected calcService: CalculatorService) {}

  ngOnInit() {
    this.principle = this.calcService.principle;
    this.rate = this.calcService.rate;
    // eslint-disable-next-line no-console
    this.calcService.dataChange.subscribe((data) => console.log(data));
  }

  principleChange(val: number | null) {
    if (val) {
      this.calcService.principle = val;
    }
  }

  rateChange(val: number | null) {
    if (val) {
      this.calcService.rate = val;
    }
  }
}
