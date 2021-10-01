import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-compound-interest-graph',
  template: ` <div echarts [options]="chartOption" class="demo-chart"></div> `,

  styles: [
    `
      .demo-chart {
        height: 400px;
        max-width: 600px;
      }
    `,
  ],
})
export class CompoundInterestGraphComponent implements OnInit {
  myData: String = '';

  chartOption: EChartsOption = {
    color: ['#80FFA5', '#FFBF00'],
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [],
    title: {
      text: 'chart',
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) =>
        `${params[0].name}</br>`.concat(
          params.map((param: any) => `${param.seriesName}: $${param.value}</br>`)
        ),
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
  };

  ngOnInit() {
    this.genData();
  }

  genData() {
    this.myData = '5';
  }
}
