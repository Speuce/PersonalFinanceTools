import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interest-page',
  template: `
    <app-year-selector></app-year-selector>
    <app-linear-slider-value
      [min]="0.0"
      [max]="100.0"
      [step]="0.05"
      suffix="%"
      title="Interest Rate"
      subtitle="Annual"
    ></app-linear-slider-value>
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
