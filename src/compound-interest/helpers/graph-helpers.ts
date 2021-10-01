import { seriesTemplate } from '../configurables/graph-defaults';
import { Series } from './graph-types';

export function getSeriesObject(name: string, data: number[], opacity: number = 1.0): Series {
  const seriesObject: Series = { ...seriesTemplate };
  seriesObject.name = name;
  seriesObject.data = data;
  seriesObject.lineStyle.opacity = opacity;
  return seriesObject;
}
