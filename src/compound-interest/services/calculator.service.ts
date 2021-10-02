import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private _principle: number;

  private _periods: number;

  private _rate: number;

  private _data: number[] = [];

  constructor() {
    this._principle = 0;
    this._periods = 0;
    this._rate = 0;
  }

  recalculate() {
    this._data = Array(this._periods);
    let balance = this._principle;
    for (let year = 0; year < this._periods; year += 1) {
      this._data[year] = Number(balance.toFixed(2));
      balance *= 1 + this._rate;
    }
  }

  get rate(): number {
    return this._rate;
  }

  set rate(value: number) {
    this._rate = value;
    this.recalculate();
  }

  get principle(): number {
    return this._principle;
  }

  set principle(value: number) {
    this._principle = value;
    this.recalculate();
  }

  get periods(): number {
    return this._periods;
  }

  set periods(value: number) {
    this._periods = value;
    this.recalculate();
  }

  get data(): number[] {
    return this._data;
  }
}
