import { Component, OnInit } from '@angular/core';
import { EChartsOption, LineSeriesOption } from 'echarts';
import { CalculatorService } from '../services/calculator.service';
import { getSeriesObject } from '../helpers/graph-helpers';

@Component({
  selector: 'app-compound-interest-graph',
  template: `
    <div echarts (chartInit)="onChartInit($event)" [options]="chartOption" class="demo-chart"></div>
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
export class CompoundInterestGraphComponent implements OnInit {
  myData: LineSeriesOption = getSeriesObject('s1', []);

  chartInstance: any = null;

  constructor(private calcService: CalculatorService) {}

  chartOption: EChartsOption = {
    color: ['#80FFA5', '#FFBF00'],
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5'],
    },
    yAxis: {
      type: 'value',
    },
    series: [this.myData],
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

  onChartInit(e: any) {
    this.chartInstance = e;
  }

  genData() {
    this.calcService.dataChange.subscribe((data) => {
      this.myData.data = data;
      // @ts-ignore
      if ('data' in this.chartOption.xAxis) {
        this.chartOption.xAxis.data = [...data.keys()].map((val) => String(val));
      }
      if (this.chartInstance) {
        this.chartInstance.setOption(this.chartOption);
      }
    });
    this.calcService.recalculate();
  }
}
