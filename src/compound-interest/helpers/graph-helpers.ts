import { LineSeriesOption } from 'echarts';
import { seriesTemplate } from '../configurables/graph-defaults';

export function getSeriesObject(
  name: string,
  data: number[],
  opacity: number = 1.0
): LineSeriesOption {
  const seriesObject: LineSeriesOption = { ...seriesTemplate };
  seriesObject.name = name;
  seriesObject.data = data;
  // @ts-ignore
  seriesObject.lineStyle.opacity = opacity;
  return seriesObject;
}
