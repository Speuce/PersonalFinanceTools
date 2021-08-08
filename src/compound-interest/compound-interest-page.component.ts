import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-compound-interest-page',
  template: `
    <p>compound-interest-page works!</p>
    <div echarts [options]="chartOption" class="demo-chart"></div>
  `,

  styles: [
    `
      .demo-chart {
        height: 400px;
        max-width: 600px;
      }
    `,
  ],
})
export class CompoundInterestPageComponent {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };
}
