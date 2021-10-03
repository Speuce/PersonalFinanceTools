/**
 *
 */
import { Series } from '../helpers/graph-types';
import { LineSeriesOption } from 'echarts';

export const graphColor: string = '#FFBF00';
/**
 * The default configuration of a series in the chart
 */
export const seriesTemplate: LineSeriesOption = {
  name: '',
  data: [],
  type: 'line',
  smooth: true,
  symbol: 'none',
  lineStyle: {
    opacity: 1.0,
    color: graphColor,
    width: 4,
  },
};
