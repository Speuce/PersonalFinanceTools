export interface GraphStyle {
  opacity: number;
  color: string;
  width: number;
}

export interface Series {
  name: string;
  data: number[];
  type: string;
  smooth: boolean;
  symbol: string;
  lineStyle: GraphStyle;
}
