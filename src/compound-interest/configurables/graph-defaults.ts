/**
 *
 */
import { Series } from '../helpers/graph-types';

export const graphColor: string = '#FFBF00';
/**
 * The default configuration of a series in the chart
 */
export const seriesTemplate: Series = {
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
