import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private _principle: number;

  private _periods: number;

  private _rate: number;

  private _data: number[] = [];

  dataChange: Subject<number[]> = new Subject();

  constructor() {
    this._principle = 1000;
    this._periods = 25;
    this._rate = 3.0;
    this.dataChange.subscribe((value) => {
      this._data = value;
    });
  }

  recalculate() {
    const newData = Array(this._periods);
    let balance = this._principle;
    for (let year = 0; year < this._periods; year += 1) {
      newData[year] = Number(balance.toFixed(2));
      balance *= 1 + this._rate / 100.0;
    }
    this.dataChange.next(newData);
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
