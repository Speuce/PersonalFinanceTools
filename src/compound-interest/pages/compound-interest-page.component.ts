import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interest-page',
  template: `
    <app-compound-interest-graph></app-compound-interest-graph>
    <div style="display: flex; flex-wrap: wrap; align-items: stretch">
      <app-year-selector></app-year-selector>
      <app-linear-slider-value
        [min]="0.0"
        [max]="100.0"
        [step]="0.05"
        [arrowStep]="1"
        suffix="%"
        title="Interest Rate"
        subtitle="Annual"
      ></app-linear-slider-value>
      <app-linear-slider-value
        [min]="0.0"
        [max]="1000000"
        [step]="10000"
        [textWidth]="150"
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
  myData: String = '';

  ngOnInit() {
    this.genData();
  }

  genData() {
    this.myData = '5';
  }
}
